const express = require("express");
const router = express.Router();

require("../Database/db")

const User = require("../models/Expense")


router.post("/postExpense", async (req, res) => {
    //et success = false;
    const {
        source,
        amount
    } = req.body;
    try {

        let num = await User.create({
            source,
            amount

        });
        res.status(200).send("Expense Posted");


    } catch (error) {
        console.error("Hello ", error.message);
        res.status(500).send("Error");
    }

});


router.get("/getExpense", async (req, res) => {
    try {
        const ans = await User.find()
        res.json(ans)
        console.log(ans)

    } catch (e) {
        console.log(e)
    }

})

module.exports = router