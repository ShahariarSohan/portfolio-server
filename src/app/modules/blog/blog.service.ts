import  httpStatus  from 'http-status-codes';

import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/appError";

const createBlog = async (payload: Prisma.BlogCreateInput) => {
    const title = await prisma.blog.findUnique({ where: { title: payload.title } })
    if (title) {
        throw new AppError(httpStatus.CONFLICT,"Title should be unique")
    }
    const blog = await prisma.blog.create({ data: payload })
    return blog;
}

export const  blogService = {
    createBlog
}