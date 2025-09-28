/* eslint-disable @typescript-eslint/no-unused-vars */
import  httpStatus  from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from '../../utils/sendResponse';
import { blogService } from './blog.service';

const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await blogService.createBlog(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog created successfully",
      data: data,
    });
  }
);


export const blogController = {
    createBlog
}