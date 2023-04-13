import { Router } from "express";
import teamRoutes from "./teams.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/api", teamRoutes)

export default router