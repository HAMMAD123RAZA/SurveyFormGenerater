import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config(); 

const sql = neon(process.env.DATABASE_URL); 

export const createForm = async (req, res) => {
    try {
        const { question, choices } = req.body;
        const newData = await sql`
            INSERT INTO form (question, choices)
            VALUES (${question}, ${choices})
            RETURNING *;
        `;
        res.status(201).json(newData[0]);
    } catch (error) {
        console.error("Error creating form:", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const getForm = async (req, res) => {
    try {
        const data = await sql`SELECT * FROM form;`;
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching forms:", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const deleteForm = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "Invalid ID" });
    }
    try {
        const data = await sql`DELETE FROM form WHERE id = ${id} RETURNING *;`;
        if (data.length === 0) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Deleted", data: data[0] });
    } catch (error) {
        console.error("Error deleting form:", error.message);
        res.status(500).json({ message: error.message });
    }
};