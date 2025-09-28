import httpStatus from "http-status-codes";

import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/appError";

const createProject = async (payload: Prisma.ProjectCreateInput) => {
  const title = await prisma.project.findUnique({
    where: { title: payload.title },
  });
  if (title) {
    throw new AppError(httpStatus.CONFLICT, "Title should be unique");
  }
  const blog = await prisma.project.create({ data: payload });
  return blog;
};

export const projectService = {
  createProject,
};
