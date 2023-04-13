import { Router } from "express";
import teamRoutes from "./teams"

const router = Router();
Router.use("/api", teamRoutes)

export default router