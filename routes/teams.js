import { Router } from "express";
import * as controllers from "../controllers/teams.js";

const router = Router();

router.get("/", controllers.getTeams);
router.get("/:name", controllers.getTeam);
router.post("/", controllers.createTeam);
router.put("/:name", controllers.updateTeam);
router.delete("/:name", controllers.deleteTeam);

export default router;
