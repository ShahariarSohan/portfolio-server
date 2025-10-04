"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const appError_1 = __importDefault(require("../errorHelpers/appError"));
const globalErrorHandler = async (err, req, res, next) => {
    let statusCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
    let message = "Something went wrong";
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            // Unique constraint failed (e.g. duplicate email)
            statusCode = http_status_codes_1.default.CONFLICT;
            message = "Title already exists";
        }
        else if (err.code === "P2003") {
            // Foreign key constraint failed (invalid relation)
            statusCode = http_status_codes_1.default.BAD_REQUEST;
            message = "Invalid reference or missing parent record";
        }
        else if (err.code === "P2025") {
            // Record not found
            statusCode = http_status_codes_1.default.NOT_FOUND;
            message = "No data found";
        }
        else if (err.code === "P2000") {
            // Input exceeds field limit
            statusCode = http_status_codes_1.default.BAD_REQUEST;
            message = "Input value too long for the database field";
        }
        else {
            console.error("Unhandled Prisma known request err:", err);
            statusCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
            message = "Unexpected database err";
        }
    }
    else if (err instanceof client_1.Prisma.PrismaClientInitializationError) {
        // Database connection or initialization issues
        statusCode = http_status_codes_1.default.SERVICE_UNAVAILABLE;
        message =
            "Database initialization failed — please check connection settings";
    }
    else if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        // Invalid input according to Prisma schema
        statusCode = http_status_codes_1.default.BAD_REQUEST;
        message = "Invalid data input — does not match Prisma schema";
    }
    else if (err instanceof client_1.Prisma.PrismaClientRustPanicError) {
        // Internal Prisma crash (rare)
        statusCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
        message = "Internal Prisma err occurred — please try again later";
    }
    else if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        statusCode = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
        message = err.message;
    }
    else {
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
exports.default = globalErrorHandler;
