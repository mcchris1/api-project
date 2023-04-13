import { Router } from "express";
import teamRoutes from "./teams.js"

const router = Router();
router.use("/api", teamRoutes)

export default router