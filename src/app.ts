import  express, { Request, Response }  from 'express';

import cors from "cors"
import { envVariables } from "./app/config/env";
import { notFound } from "./app/middlewares/notFound";
import { authRoutes } from "./app/modules/auth/auth.route";
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { blogRoutes } from './app/modules/blog/blog.route';
import { projectRoutes } from './app/modules/project/project.route';
import { statsRoutes } from './app/modules/stats/stats.route';




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
  res.status(200).json({message:"Shahariar Sohan Portfolio Server Is Running"})
})
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/stats", statsRoutes);
app.use(globalErrorHandler)
app.use(notFound)

export default app;