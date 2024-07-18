import express from "express";
import nodemon from "nodemon";
import mongoose from "mongoose";
import cors from "cors"
import { createForm, getForm } from "./controllers/FormControllers.js";
import { login, signUp } from "./controllers/UserController.js";
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017",{
    dbName:"surveyForm"
}).then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("connection refused")
})

app.get("/",getForm)
app.post("/create",createForm)

app.post("/login",login)
app.post("/signup",signUp)

app.listen(8080 ,()=>{
    console.log("server started ")
})