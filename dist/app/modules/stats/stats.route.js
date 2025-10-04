"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRoutes = void 0;
const express_1 = require("express");
const stats_controller_1 = require("./stats.controller");
const router = (0, express_1.Router)();
router.get("/blogs", stats_controller_1.statsController.getBlogStats);
router.get("/projects", stats_controller_1.statsController.getProjectStats);
exports.statsRoutes = router;
