import { Router } from "express";
import { statsController } from "./stats.controller";



const router = Router();

router.get("/blogs",statsController.getBlogStats)
router.get("/projects",statsController.getProjectStats)



export const statsRoutes = router;