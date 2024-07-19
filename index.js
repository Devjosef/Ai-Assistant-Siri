import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes.js';

dotenv.config();

const app = express();

// Middleware for security headers
app.use(helmet());

// Middleware for enabling CORS
app.use(cors());

// Middleware for logging requests
app.use(morgan('combined'));

// Middleware for parsing JSON bodies
app.use(express.json()); 

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use routes from the separate routes file
app.use(routes);

// Root endpoint with styled HTML response
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to the API</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #000428, #004e92);
          color: white;
          font-family: Arial, sans-serif;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.5rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the API!</h1>
        <p>The API is up and running smoothly.</p>
      </div>
    </body>
    </html>
  `);
});

// Global error handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Set up server to listen on port 3000 or the environment's port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});