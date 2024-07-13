import express from "express";
import nodemon from "nodemon";
import mongoose from "mongoose";
import cors from "cors"
const app=express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017",{
    dbName:"survey form"
}).then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("connection refused")
})

app.listen(8080 ,()=>{
    console.log("server started ")
})