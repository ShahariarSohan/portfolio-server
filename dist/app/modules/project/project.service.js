"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const db_1 = require("../../config/db");
const appError_1 = __importDefault(require("../../errorHelpers/appError"));
const createProject = async (payload) => {
    const title = await db_1.prisma.project.findUnique({
        where: { title: payload.title },
    });
    if (title) {
        throw new appError_1.default(http_status_codes_1.default.CONFLICT, "Title should be unique");
    }
    const project = await db_1.prisma.project.create({ data: payload });
    return project;
};
const getAllProjects = async () => {
    const projects = await db_1.prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return projects;
};
const getProjectById = async (id) => {
    const project = await db_1.prisma.project.findUnique({ where: { id } });
    if (!project) {
        throw new appError_1.default(http_status_codes_1.default.NOT_FOUND, "Project not found");
    }
    return project;
};
const updateProjectById = async (id, payload) => {
    const project = await db_1.prisma.project.update({
        where: { id },
        data: { ...payload },
    });
    return project;
};
const deleteProjectById = async (id) => {
    await db_1.prisma.project.delete({ where: { id } });
    return null;
};
exports.projectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById
};
