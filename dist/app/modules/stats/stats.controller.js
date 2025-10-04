"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = require("../../utils/sendResponse");
const stats_service_1 = require("./stats.service");
const getBlogStats = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await stats_service_1.statsService.getBlogStats();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Blog stats retrieved",
        data: data,
    });
});
const getProjectStats = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await stats_service_1.statsService.getProjectStats();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Project stats retrieved",
        data: data,
    });
});
exports.statsController = {
    getBlogStats,
    getProjectStats
};
