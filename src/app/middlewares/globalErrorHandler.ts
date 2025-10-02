/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

import { Prisma } from "@prisma/client";
import httpStatus from "http-status-codes";
import AppError from "../errorHelpers/appError";


const globalErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong";

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      // Unique constraint failed (e.g. duplicate email)
      statusCode = httpStatus.CONFLICT;
      message = "Title already exists";
    } else if (err.code === "P2003") {
      // Foreign key constraint failed (invalid relation)
      statusCode = httpStatus.BAD_REQUEST;
      message = "Invalid reference or missing parent record";
    } else if (err.code === "P2025") {
      // Record not found
      statusCode = httpStatus.NOT_FOUND;
      message = "No data found";
    } else if (err.code === "P2000") {
      // Input exceeds field limit
      statusCode = httpStatus.BAD_REQUEST;
      message = "Input value too long for the database field";
    } else {
      console.error("Unhandled Prisma known request err:", err);
      statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      message = "Unexpected database err";
    }
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    // Database connection or initialization issues
    statusCode = httpStatus.SERVICE_UNAVAILABLE;
    message =
      "Database initialization failed — please check connection settings";
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    // Invalid input according to Prisma schema
    statusCode = httpStatus.BAD_REQUEST;
    message = "Invalid data input — does not match Prisma schema";
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    // Internal Prisma crash (rare)
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = "Internal Prisma err occurred — please try again later";
  } 
  else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = err.message;
  } else {
    // Unknown or non-Prisma errs
    console.error("Unknown err type:", err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    err: err,
    stack: err.stack,
  });
};

export default globalErrorHandler;
