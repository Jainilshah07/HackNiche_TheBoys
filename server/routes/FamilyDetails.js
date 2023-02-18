const express = require("express");
const router = express.Router();

require("../Database/db")

const User = require("../models/Familydetails")


router.post("/postFamDetails", async (req, res) => {
    //et success = false;
    const {
        name,
        age,
        occupation,
        gender,
        totalfamincome
    } = req.body;
    try {

        let num = await User.create({
            name,
            age,
            occupation,
            gender,
            totalfamincome

        });
        res.status(200).send("User Detaails Posted");


    } catch (error) {
        console.error("Hello ", error.message);
        res.status(500).send("Error");
    }

});


router.get("/getFamDetails", async (req, res) => {
    try {
        const ans = await User.find()
        res.json(ans)
        console.log(ans)

    } catch (e) {
        console.log(e)
    }

})

module.exports = router