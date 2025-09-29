"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../../config/db");
const appError_1 = __importDefault(require("../../errorHelpers/appError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const adminLogin = async (payload) => {
    const admin = await db_1.prisma.admin.findUnique({
        where: { email: payload.email },
    });
    if (!admin) {
        throw new appError_1.default(http_status_codes_1.default.UNAUTHORIZED, "Invalid Email");
    }
    const passwordMatched = await bcrypt_1.default.compare(payload.password, admin.password);
    if (!passwordMatched) {
        throw new appError_1.default(http_status_codes_1.default.UNAUTHORIZED, "Password Doesn't Matched");
    }
    return admin;
};
exports.authService = {
    adminLogin
};
