/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { projectService } from "./project.service";

const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await projectService.createProject(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Project created successfully",
      data: data,
    });
  }
);
const getAllProjects = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await projectService.getAllProjects();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Projects retrieved successfully",
      data: data,
    });
  }
);
const getProjectById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = await projectService.getProjectById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project retrieved successfully",
      data: data,
    });
  }
);
const updateProjectById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = await projectService.updateProjectById(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Updated Successfully",
      data: data,
    });
  }
);
const deleteProjectById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = await projectService.deleteProjectById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project deleted",
      data: data,
    });
  }
);
export const projectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
