const mongoose = require("mongoose")
const { Schema } = mongoose;

const FamilyDetailsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    occupation: {
        type: String
    },
    gender: {
        type: String
    },
    totalfamincome: {
        type: Number
    }
})

const FamilyDetailsData = new mongoose.model("FamilyDetailsData", FamilyDetailsSchema);
module.exports = FamilyDetailsData;