import  express, { Request, Response }  from 'express';

import cors from "cors"
import { envVariables } from "./app/config/env";
import { notFound } from "./app/middlewares/notFound";
import { authRoutes } from "./app/modules/auth/auth.route";
import globalErrorHandler from './app/middlewares/globalErrorHandler';




const app = express()


app.use(cors())
app.use(express.json()); 

app.use(
  cors({
    origin:envVariables.FRONTEND_URL,
    credentials: true,
  })
);


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({message:"Portfolio server is running"})
})
app.use("/api/v1/auth", authRoutes);
app.use(globalErrorHandler)
app.use(notFound)

export default app;