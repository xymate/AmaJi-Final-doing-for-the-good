import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import {userRouter} from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });
const PORT =process.env.PORT || 3001;
const app=express();
app.use(express.json());
app.use(cors());

app.use("/auth",userRouter)

mongoose.connect(process.env.DATABASE_URL);

app.listen(PORT,()=>{
    console.log("server started at port 3001");
})
