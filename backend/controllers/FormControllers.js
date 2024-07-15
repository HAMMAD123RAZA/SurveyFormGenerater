import { Data } from "../model/FormModel.js";

export const createForm = async (req, res) => {
    try {
        const { question, choices } = req.body;
        const newData = await Data.create({ question, choices });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getForm=async(req,res)=>{
    try {
        const data=await Data.find()
        res.json(data)
    } catch (error) {
        console.log(error,"error occured in getting data")
    }
}