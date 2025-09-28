import { Router } from "express";
import { projectController } from "./project.controller";



const router = Router();

router.post("/",projectController.createProject)

export const projectRoutes = router;