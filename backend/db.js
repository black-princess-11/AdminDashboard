
const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/AdminDashboard-user";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);

        console.log("Connected to MongoDB successfully!");
        const db = mongoose.connection;
        await db.collection("User").insertOne(
            {
                name:"Vishva Hadvani",
                email:"vishva@gmail.com",
                age:23
            }
        );
        console.log("Inserted a document into the User collection.");
    } catch (err) {
        console.log("Error in connecting to MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = connectToMongo;
