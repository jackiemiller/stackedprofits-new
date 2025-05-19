// This is a catch-all API route handler for Vercel
import express from 'express';
import { createServer } from 'http';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Skip the logging middleware for simplicity in production

// Create a serverless function compatible with Vercel
export default async function handler(req, res) {
  // Create a temporary server to register routes
  const server = createServer(app);
  await registerRoutes(app);
  
  // Forward the request to the appropriate route handler
  return new Promise((resolve) => {
    app(req, res, () => {
      resolve();
    });
  });
}