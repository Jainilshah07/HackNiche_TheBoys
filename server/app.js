const express = require("express")
const app = express();
const PORT = process.env.PORT || 8000

require("./Database/db")

app.use(express.json())

app.use("/api/User", require("./routes/User"))


app.listen(PORT, () => {
    console.log("Connected to server")
})