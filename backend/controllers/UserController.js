import express from "express";
import { userMOdel } from "../model/UserModel.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await userMOdel.findOne({ email });
        if (user) {
            return res.status(501).json({ message: "user already exists" });
            
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userMOdel.create({ userName, email, password: hashPassword });
        return res.status(201).json({ message: "user created", newUser });
    } catch (error) {
        console.log(error);
        return res.status(501).json({ message: "error in signUp" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userMOdel.findOne({ email });

        if (!user) {
            return res.status(501).json({ message: "user doesn't exist" });
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        return res.status(201).json({ message: "user logged in" });
    } catch (error) {
        console.log(error, "error in logged in user");
        return res.status(500).json({ message: "Server error" });
    }
};