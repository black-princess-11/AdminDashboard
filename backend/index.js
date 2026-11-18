const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

connectToMongo();

// Test API
app.get("/", (req, res) => {
    res.send("Backend Connected Successfully");
});

// Registration API
app.post("/register", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Registration Successful",
        user: req.body
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});