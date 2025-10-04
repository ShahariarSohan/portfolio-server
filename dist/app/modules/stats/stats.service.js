"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsService = void 0;
const db_1 = require("../../config/db");
const getBlogStats = async () => {
    try {
        const blogsCount = await db_1.prisma.blog.count();
        return { blogsCount };
    }
    catch (err) {
        console.error("Error fetching blog stats:", err);
        return { blogsCount: 0 }; // fallback
    }
};
const getProjectStats = async () => {
    try {
        const projectsCount = await db_1.prisma.project.count();
        return { projectsCount };
    }
    catch (err) {
        console.error("Error fetching blog stats:", err);
        return { projectsCount: 0 }; // fallback
    }
};
exports.statsService = {
    getBlogStats,
    getProjectStats
};
