import { Router } from "express";
import { blogController } from "./blog.controller";


const router = Router();

router.post("/",blogController.createBlog)
router.get("/", blogController.getAllBlogs)
router.get("/:id", blogController.getBlogById)
router.patch("/:id", blogController.updateBlogById)
router.delete("/:id", blogController.deleteBlogById)

export const blogRoutes = router;