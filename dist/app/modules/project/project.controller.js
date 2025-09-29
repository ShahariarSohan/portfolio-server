"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = require("../../utils/sendResponse");
const project_service_1 = require("./project.service");
const createProject = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await project_service_1.projectService.createProject(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.CREATED,
        success: true,
        message: "Project created successfully",
        data: data,
    });
});
const getAllProjects = (0, catchAsync_1.default)(async (req, res, next) => {
    const data = await project_service_1.projectService.getAllProjects();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Projects retrieved successfully",
        data: data,
    });
});
const getProjectById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await project_service_1.projectService.getProjectById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Project retrieved successfully",
        data: data,
    });
});
const updateProjectById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await project_service_1.projectService.updateProjectById(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Project Updated Successfully",
        data: data,
    });
});
const deleteProjectById = (0, catchAsync_1.default)(async (req, res, next) => {
    const id = Number(req.params.id);
    const data = await project_service_1.projectService.deleteProjectById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: "Project deleted",
        data: data,
    });
});
exports.projectController = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
};
