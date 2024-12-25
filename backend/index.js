import express from "express";
import cors from "cors";
import { createForm, deleteForm, getForm } from "./controllers/FormControllers.js";
import { login, signUp } from "./controllers/UserController.js";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config(); 
const sql = neon(process.env.DATABASE_URL); 
const app = express();

app.use(express.json());
app.use(cors());

const conn=async ()=>{
    try {
        await sql `SELECT 1`;
        console.log("Database Connected")
        app.listen(8080,()=>{
            console.log("server started ")
        })
    } catch (error) {
        console.error("failed to connect to the db",error.messsage);
        process.exit(1);
    }
}

conn()

app.use(cors({
  origin: "https://your-frontend-url.vercel.app",
  credentials: true,
}));


// Routes
app.get("/", getForm);
app.post("/create", createForm);
app.post("/login", login);
app.post("/signup", signUp);
app.delete('/delete/:id',deleteForm)