import { prisma } from "../../config/db";

const getBlogStats = async () => {
  try {
    const blogsCount = await prisma.blog.count();
    return { blogsCount };
  } catch (err) {
    console.error("Error fetching blog stats:", err);
    return { blogsCount: 0 }; // fallback
  }
};
const getProjectStats = async () => {
try {
  const projectsCount = await prisma.project.count();
  return { projectsCount };
} catch (err) {
  console.error("Error fetching blog stats:", err);
  return { projectsCount: 0 }; // fallback
}
};



export const statsService = {
    getBlogStats,
    getProjectStats
}