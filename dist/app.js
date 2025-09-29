"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./app/config/env");
const notFound_1 = require("./app/middlewares/notFound");
const auth_route_1 = require("./app/modules/auth/auth.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const blog_route_1 = require("./app/modules/blog/blog.route");
const project_route_1 = require("./app/modules/project/project.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: env_1.envVariables.FRONTEND_URL,
    credentials: true,
}));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Portfolio server is running" });
});
app.use("/api/v1/auth", auth_route_1.authRoutes);
app.use("/api/v1/blogs", blog_route_1.blogRoutes);
app.use("/api/v1/projects", project_route_1.projectRoutes);
app.use(globalErrorHandler_1.default);
app.use(notFound_1.notFound);
exports.default = app;
