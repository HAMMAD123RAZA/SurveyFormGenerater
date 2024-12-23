import express from "express";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const sql = neon(process.env.DATABASE_URL);

const secret = process.env.JWT_SECRET || "mysecurityKey";

export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // Check if the user already exists
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (user.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password and create the user
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await sql`
            INSERT INTO users (username, email, password)
            VALUES (${userName}, ${email}, ${hashPassword})
            RETURNING id, username, email;
        `;

        // Create a JWT token
        const token = jwt.sign({ id: newUser[0].id, email: newUser[0].email }, secret, { expiresIn: "1h" });

        return res.status(201).json({ message: "User created", user: newUser[0], token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error in sign-up" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (user.length === 0) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        // Compare passwords
        const comparePass = await bcrypt.compare(password, user[0].password);
        if (!comparePass) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user[0].id, email: user[0].email }, secret, { expiresIn: "1h" });

        return res.status(200).json({ message: "User logged in", token });
    } catch (error) {
        console.error(error, "Error in login");
        return res.status(500).json({ message: "Server error" });
    }
};
