/* eslint-disable @typescript-eslint/no-unused-vars */
import  httpStatus  from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from './auth.service';
import catchAsync from '../../utils/catchAsync';

const adminLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await authService.adminLogin(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Login Successful",
      data: data,
    });
  }
);

export const authController = {
    adminLogin
}