import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import ConfigRoutes from './routes/config.routes'

const app = express();

// Load enviroment variables
dotenv.config()
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

// Some configurations
app.use(cors());
app.use(express.json());

// Routers
app.use('/', ConfigRoutes);

// Server initialization
app.listen(PORT, () => {
    console.log(`
    Server running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/
    `);
});