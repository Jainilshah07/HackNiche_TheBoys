const mongoose = require("mongoose")
const { Schema } = mongoose;

const ExpenseSchema = new mongoose.Schema({
    source: {
        type: String
    },
    amount: {
        type: Number
    }
})

const ExpenseData = new mongoose.model("ExpenseData", ExpenseSchema);
module.exports = ExpenseData;