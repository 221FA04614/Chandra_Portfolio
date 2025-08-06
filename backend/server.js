import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; // Import the 'path' module
import { fileURLToPath } from 'url'; // Import 'fileURLToPath'
import connectDB from './config/database.js';
import portfolioRouter from './routes/portfolio.routes.js';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 8000;

// --- Middleware ---
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: "16kb" }));

// --- API Routes ---
app.use('/api/v1/portfolio', portfolioRouter);

// =================================================================
// DEPLOYMENT CONFIGURATION (New Section)
// =================================================================
// This section is for serving the frontend build in production on Render

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
// =================================================================

// --- Database Connection ---
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`ChandraPortfolio server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!! ", err);
  });