import express,{Express} from "express";
import {configDotenv} from "dotenv";
import Util from "./utils/util";
import router from "./routes/route"
configDotenv();

const PORT:number= parseInt(process.env.PORT!)
const app: Express =express();
app.use(express.json());
app.use("/api",router )

Util.startServer(PORT,app);
