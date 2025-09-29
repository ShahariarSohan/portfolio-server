"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVariables = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVariables = () => {
    const requiredVariables = [
        "PORT",
        "DATABASE_URL",
        "FRONTEND_URL",
        "ADMIN_EMAIL",
        "ADMIN_NAME",
        "ADMIN_PASSWORD",
        "ADMIN_PHONE",
        "BCRYPT_SALT_ROUND",
    ];
    requiredVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing env variables ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
        FRONTEND_URL: process.env.FRONTEND_URL,
        ADMIN_NAME: process.env.ADMIN_NAME,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        ADMIN_PHONE: process.env.ADMIN_PHONE,
        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
    };
};
exports.envVariables = loadEnvVariables();
