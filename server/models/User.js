const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        //required: true
    },
    LastName: {
        type: String,
        //required: true
    },
    MobileNo: {
        type: Number,
        // min: 10,
        // max: 11
    },
    EmailId: {
        type: String,

    },
    Password: {
        type: String,
        //required: true
    },
    CPassword: {
        type: String,
        //required: true
    },
    FamilyDetails:
        [{ name: String, age: Number, occupation: String }]
    ,
    TotalFamIncome: {
        type: Number
    }
})


const userData = new mongoose.model("userdata", userSchema);
module.exports = userData;