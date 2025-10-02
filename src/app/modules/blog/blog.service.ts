import httpStatus from "http-status-codes";

import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/appError";

const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
  const blog = await prisma.blog.create({ data: payload });
  return blog;
};
const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return blogs;
};
const getBlogById = async (id: number) => {
  return await prisma.$transaction(async (tx) => {
    const blog= await tx.blog.findUnique({ where: { id } });
    if (!blog) {
      throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
    }
    const updatedBlog=await tx.blog.update({ where: { id }, data: { views: { increment: 1 } } });
    return updatedBlog;
  });
};

const updateBlogById = async (id: number, payload: Partial<Blog>) => {
  const blog = await prisma.blog.update({
    where: { id },
    data: { ...payload },
  });

  return blog;
};

const deleteBlogById = async (id: number) => {
   await prisma.blog.delete({ where: { id } });
  return null;
};
export const blogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
