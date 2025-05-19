import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadInsertSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  
  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all FAQs
  app.get("/api/faqs", async (req, res) => {
    try {
      const faqs = await storage.getAllFaqs();
      return res.status(200).json(faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit a lead
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = leadInsertSchema.parse(req.body);
      
      // Log the lead data for now
      console.log("New lead submitted:", JSON.stringify(validatedData, null, 2));
      
      // Try to save to database, but don't fail the request if it doesn't work
      try {
        const result = await storage.insertLead(validatedData);
        console.log("Lead saved to database:", result);
      } catch (dbError) {
        console.error("Could not save lead to database:", dbError);
        // Continue with request - don't fail just because DB failed
      }
      
      // Save the lead data to a file as backup
      const fs = require('fs');
      const path = require('path');
      
      // Create leads directory if it doesn't exist
      const leadsDir = path.join(process.cwd(), 'leads');
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
      
      return res.status(201).json({
        message: "Lead successfully submitted",
        lead: {
          id: 0, // Placeholder ID since we might not have DB access
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
  });

  const httpServer = createServer(app);
  return httpServer;
}
