const mongoose = require("mongoose")
const { Schema } = mongoose;

const FamilyDetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdata'
    },
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

const FamilyDetailsData = new mongoose.model("FamilyDetailsData", userSchema);
module.exports = FamilyDetailsData;