const express = require("express")
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 8000

require("./Database/db")
app.use(cors())
app.use(express.json())

app.use("/api/User", require("./routes/User"))

app.use("/api/Fam", require("./routes/FamilyDetails"))

app.use("/api/Exp", require("./routes/Expense"))


app.listen(PORT, () => {
    console.log("Connected to server")
})