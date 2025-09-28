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

export const projectController = {
  createProject,
};
