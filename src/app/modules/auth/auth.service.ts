import  bcrypt  from 'bcrypt';

import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/appError";
import httpStatus from "http-status-codes";
interface ILogin {
  email: string;
  password: string;
}

const adminLogin = async (payload: ILogin) => {
  const admin = await prisma.admin.findUnique({
    where: { email: payload.email },
  });
    if (!admin) {
        throw new AppError(httpStatus.UNAUTHORIZED,"Invalid Email")
    }
    const passwordMatched = await bcrypt.compare(payload.password, admin.password)
    if (!passwordMatched) {
        throw new AppError(httpStatus.UNAUTHORIZED,"Password Doesn't Matched")
    }
    return admin
};


export const authService = {
    adminLogin
}