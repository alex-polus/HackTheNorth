const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("testing success")
})

app.listen(3000)