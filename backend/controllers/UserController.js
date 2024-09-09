import express from "express";
import { userMOdel } from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const secret = 'mysecurityKey';

export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await userMOdel.findOne({ email });
        if (user) {
            return res.status(501).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userMOdel.create({ userName, email, password: hashPassword });

        // Fix: Replace JWT_SECRET with secret
        const token = jwt.sign({ id: newUser._id, email: newUser.email }, secret, { expiresIn: '1h' });

        return res.status(201).json({ message: "User created", newUser, token });
    } catch (error) {
        console.log(error);
        return res.status(501).json({ message: "Error in signUp" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userMOdel.findOne({ email });

        if (!user) {
            return res.status(501).json({ message: "User doesn't exist" });
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });

        return res.status(201).json({ message: "User logged in", token });
    } catch (error) {
        console.log(error, "Error in logged in user");
        return res.status(500).json({ message: "Server error" });
    }
};
