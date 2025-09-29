import { Router } from "express";
import { projectController } from "./project.controller";



const router = Router();

router.post("/", projectController.createProject)
router.get("/", projectController.getAllProjects)
router.get("/:id", projectController.getProjectById)
router.patch("/:id", projectController.updateProjectById)
router.delete("/:id", projectController.deleteProjectById)

export const projectRoutes = router;