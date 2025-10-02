import httpStatus from "http-status-codes";

import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/appError";

const createProject = async (payload: Prisma.ProjectCreateInput) => {
  const project = await prisma.project.create({ data: payload });
  return project;
};
const getAllProjects = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return projects;
};
const getProjectById = async (id: number) => {
  
    const project = await prisma.project.findUnique({ where: { id } });
    if (!project) {
      throw new AppError(httpStatus.NOT_FOUND, "Project not found");
    }
   
    return project;
  
};

const updateProjectById = async (id: number, payload: Partial<Project>) => {
  const project = await prisma.project.update({
    where: { id },
    data: { ...payload },
  });

  return project;
};

const deleteProjectById = async (id: number) => {
  await prisma.project.delete({ where: { id } });
  return null;
};
export const projectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById
};
