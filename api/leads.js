// Direct API handler for lead submissions on Vercel
import { z } from "zod";
import fs from 'fs';
import path from 'path';

// Define the lead schema directly here for Vercel
const leadSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  websiteType: z.string().min(1, "Please select a website type")
});

export default async function handler(req, res) {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse and validate the request body
    const validatedData = leadSchema.parse(req.body);
    
    // Log the lead data
    console.log("New lead submitted:", JSON.stringify(validatedData, null, 2));
    
    // Save the lead data to a file as backup
    // Create leads directory if it doesn't exist
    const leadsDir = path.join(process.cwd(), 'leads');
    try {
      if (!fs.existsSync(leadsDir)) {
        fs.mkdirSync(leadsDir, { recursive: true });
      }
      
      // Generate a filename with timestamp and user email
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${timestamp}_${validatedData.email.replace(/[@.]/g, '_')}.json`;
      const filePath = path.join(leadsDir, filename);
      
      // Write lead data to file
      fs.writeFileSync(filePath, JSON.stringify({
        ...validatedData,
        submittedAt: new Date().toISOString()
      }, null, 2));
      
      console.log(`Lead saved to file: ${filePath}`);
    } catch (fileError) {
      console.error("Error saving lead to file:", fileError);
      // Continue with request even if file saving fails
    }
    
    return res.status(201).json({
      message: "Lead successfully submitted",
      lead: {
        id: 0,
        ...validatedData,
        createdAt: new Date()
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error creating lead:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}