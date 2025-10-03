import { prisma } from "../../config/db";

const getBlogStats = async () => {
  const blogsCount = await prisma.blog.count();
  return {blogsCount};
};
const getProjectStats = async () => {
  const projectsCount = await prisma.project.count();
  return {projectsCount};
};



export const statsService = {
    getBlogStats,
    getProjectStats
}