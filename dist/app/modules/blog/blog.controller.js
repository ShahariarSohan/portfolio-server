"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = require("../../utils/sendResponse");
const blog_service_1 = require("./blog.service");
const createBlog = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await blog_service_1.blogService.createBlog(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.CREATED,
        success: true,
        message: "Blog created successfully",
        data: data,
    });
});
const getAllBlogs = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await blog_service_1.blogService.getAllBlogs();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Blogs retrieved successfully",
        data: data,
    });
});
const getBlogById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await blog_service_1.blogService.getBlogById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Blog retrieved successfully",
        data: data,
    });
});
const updateBlogById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await blog_service_1.blogService.updateBlogById(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Blog Updated Successfully",
        data: data,
    });
});
const deleteBlogById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await blog_service_1.blogService.deleteBlogById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Blog deleted",
        data: data,
    });
});
exports.blogController = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogById,
    deleteBlogById
};
