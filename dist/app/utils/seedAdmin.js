"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const env_1 = require("../config/env");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../config/db");
const seedAdmin = async () => {
    const adminPayload = {
        id: Math.floor(Math.random() * 1000000),
        name: env_1.envVariables.ADMIN_NAME,
        email: env_1.envVariables.ADMIN_EMAIL,
        password: await bcrypt_1.default.hash(env_1.envVariables.ADMIN_PASSWORD, Number(env_1.envVariables.BCRYPT_SALT_ROUND)),
        phone: env_1.envVariables.ADMIN_PHONE,
    };
    try {
        const admin = await db_1.prisma.admin.findUnique({
            where: {
                email: adminPayload.email,
            },
        });
        if (admin) {
            console.log("😡 Admin already exist");
            return;
        }
        await db_1.prisma.admin.create({ data: adminPayload });
        console.log("Admin created for once");
    }
    catch (err) {
        console.log("Error happened Creating Admin", err);
    }
};
exports.seedAdmin = seedAdmin;
