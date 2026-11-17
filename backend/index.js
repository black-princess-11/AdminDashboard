
const express = require("express");
const connectToMongo = require("./db");

const app = express();

app.use(express.json());

// Your existing routes here

const PORT = 5000;

const startServer = async () => {
    try {
        await connectToMongo();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server Error:", error.message);
    }
};

startServer();
