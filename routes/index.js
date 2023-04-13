import { Router } from "express";
import teamRoutes from "./teams.js"

const router = Router();
Router.use("/api", teamRoutes)

export default router