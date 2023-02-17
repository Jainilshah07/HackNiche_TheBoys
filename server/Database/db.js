const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/FinancialManagement"

mongoose.set("strictQuery", false);

mongoose.connect(uri).then(() => {
    console.log("Connection successfull with Databse");
}).catch((e) => {
    console.log(e);
})