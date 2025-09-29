"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const db_1 = require("./app/config/db");
const app_1 = __importDefault(require("./app"));
const env_1 = require("./app/config/env");
const seedAdmin_1 = require("./app/utils/seedAdmin");
let server = null;
const connectToDB = async () => {
    try {
        await db_1.prisma.$connect();
        console.log("✅ SQL Database Connected");
    }
    catch (err) {
        console.log("❌ Database Connection Failed", err);
    }
};
async function startServer() {
    try {
        server = http_1.default.createServer(app_1.default);
        server.listen(env_1.envVariables.PORT, () => {
            console.log(`✅ Server is running on port ${env_1.envVariables.PORT}`);
        });
        handleProcessEvents();
    }
    catch (error) {
        console.error("❌ Error during server startup:", error);
        process.exit(1);
    }
}
/**

 * @param {string} signal
 */
async function gracefulShutdown(signal) {
    console.warn(`🔄 Received ${signal}, shutting down gracefully...`);
    if (server) {
        server.close(async () => {
            console.log("✅ HTTP server closed.");
            try {
                console.log("Server shutdown complete.");
            }
            catch (error) {
                console.error("❌Error during shutdown:", error);
            }
            process.exit(0);
        });
    }
    else {
        process.exit(0);
    }
}
/**
 * Handle system signals and unexpected errors.
 */
function handleProcessEvents() {
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("uncaughtException", (error) => {
        console.error("💥 Uncaught Exception:", error);
        gracefulShutdown("uncaughtException");
    });
    process.on("unhandledRejection", (reason) => {
        console.error("💥 Unhandled Rejection:", reason);
        gracefulShutdown("unhandledRejection");
    });
}
(async () => {
    await connectToDB();
    await startServer();
    await (0, seedAdmin_1.seedAdmin)();
})();
