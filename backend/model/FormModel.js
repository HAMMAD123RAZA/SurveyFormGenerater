import mongoose from "mongoose";

const quesSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    choices: {
        type: [String],  
        required: true
    }
}, {
    timestamps: true 
});

export const Data = mongoose.model("Data", quesSchema);
