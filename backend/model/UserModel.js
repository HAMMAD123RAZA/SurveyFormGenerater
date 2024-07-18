import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
},{
    timestamps:true
})

export const userMOdel=mongoose.model("userMOdel",userSchema)