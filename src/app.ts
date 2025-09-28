import express, { Response } from "express"
import cors from "cors"



const app = express()


app.use(cors())
app.use(express.json()); 

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.get("/", (res: Response) => {
    res.send("My portfolio server is running")
})
export default app;