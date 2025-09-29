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

const getAllBlogs = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await blogService.getAllBlogs();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blogs retrieved successfully",
      data: data,
    });
  }
);
const getBlogById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id=Number(req.params.id)
    const data = await blogService.getBlogById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog retrieved successfully",
      data: data,
    });
  }
);
const updateBlogById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id=Number(req.params.id)
    const data = await blogService.updateBlogById(id,req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Updated Successfully",
      data: data,
    });
  }
);
const deleteBlogById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id=Number(req.params.id)
    const data = await blogService.deleteBlogById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog deleted",
      data: data,
    });
  }
);

export const blogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById
}