// api/index.js
import { createServer } from 'http';
import express from 'express';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());

export default async (req, res) => {
  // Initialize routes
  const server = createServer();
  await registerRoutes(app);
  
  // Pass the request to express
  return app(req, res);
};