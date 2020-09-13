import { Request, Response, Router } from "express";
import ConfigRoutes from './config.routes'

const router = Router();

// Config routes
router.use('/', ConfigRoutes);

export default router;