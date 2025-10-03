/* eslint-disable @typescript-eslint/no-unused-vars */
import  httpStatus  from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { statsService } from './stats.service';

const getBlogStats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await statsService.getBlogStats();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog stats retrieved",
      data: data,
    });
  }
);
const getProjectStats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await statsService.getProjectStats();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project stats retrieved",
      data: data,
    });
  }
);


export const statsController = {
    getBlogStats,
    getProjectStats
}