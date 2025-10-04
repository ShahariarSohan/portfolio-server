"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const db_1 = require("../../config/db");
const appError_1 = __importDefault(require("../../errorHelpers/appError"));
const createBlog = async (payload) => {
    const blog = await db_1.prisma.blog.create({ data: payload });
    return blog;
};
const getAllBlogs = async () => {
    const blogs = await db_1.prisma.blog.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return blogs;
};
const getBlogById = async (id) => {
    return await db_1.prisma.$transaction(async (tx) => {
        const blog = await tx.blog.findUnique({ where: { id } });
        if (!blog) {
            throw new appError_1.default(http_status_codes_1.default.NOT_FOUND, "Blog not found");
        }
        const updatedBlog = await tx.blog.update({ where: { id }, data: { views: { increment: 1 } } });
        return updatedBlog;
    });
};
const updateBlogById = async (id, payload) => {
    const blog = await db_1.prisma.blog.update({
        where: { id },
        data: { ...payload },
    });
    return blog;
};
const deleteBlogById = async (id) => {
    await db_1.prisma.blog.delete({ where: { id } });
    return null;
};
exports.blogService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById,
};
