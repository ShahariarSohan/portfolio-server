import { Prisma } from "@prisma/client";
import { envVariables } from "../config/env";
import bcrypt from "bcrypt";
import { prisma } from "../config/db";

export const seedAdmin = async () => {
   const adminPayload: Prisma.AdminCreateInput = {
    id: Math.floor(Math.random() * 1000000),
    name: envVariables.ADMIN_NAME,
    email: envVariables.ADMIN_EMAIL,
    password: await bcrypt.hash(
      envVariables.ADMIN_PASSWORD,
      Number(envVariables.BCRYPT_SALT_ROUND)
    ),
    phone: envVariables.ADMIN_PHONE,
  };
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email: adminPayload.email,
      },
    });
    if (admin) {
      console.log("😡 Admin already exist");
      return;
    }
     await prisma.admin.create({ data: adminPayload });
     console.log("Admin created for once")
  } catch (err) {
    console.log("Error happened Creating Admin", err);
  }
};
