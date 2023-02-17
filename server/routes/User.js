const express = require("express");
const router = express.Router();

require("../Database/db")

const User = require("../models/User")

router.post("/register", async (req, res) => {
    const {
        FirstName,
        LastName,
        MobileNo,
        EmailId,
        Password,
        CPassword,

    } = req.body;

    let num = await User.findOne({ EmailId: req.body.EmailId });
    if (num) {
        return res.status(400).json({ error: "Sorry already registered" });
    }

    try {
        num = User.create({
            FirstName,
            LastName,
            MobileNo,
            EmailId,
            Password,
            CPassword,

        });
        res.status(200).send("User Registered");
    } catch (error) {
        res.status(500).send("Error");
    }
});

router.post("/budgetdetails", async (req, res) => {
    const {
        FamilyDetails,
        TotalFamIncome

    } = req.body;



    try {
        let num = User.create({
            FamilyDetails,
            TotalFamIncome
        });
        res.status(200).send("User Registered");
        console.log(res.json())
    } catch (error) {
        res.status(500).send("Error");
    }
});

router.get("/getdetails", async (req, res) => {
    try {
        const ans = await User.find()
        res.json(ans)
        console.log(ans)

    } catch (e) {
        console.log(e)
    }

})

module.exports = router;