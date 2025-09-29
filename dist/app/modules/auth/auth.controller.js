"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const adminLogin = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await auth_service_1.authService.adminLogin(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Login Successful",
        data: data,
    });
});
exports.authController = {
    adminLogin
};
