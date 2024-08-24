const mongoose = require("mongoose");

// Replace with your MongoDB Atlas connection string
const mongoURI = "mongodb+srv://muzdalfazulfiqar11:Lh0zZKaUxoKE8lsf@cluster0.8dl8o.mongodb.net/RecipeMaster?retryWrites=true&w=majority";

function connectToMongo() {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas Successfully");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB Atlas:", error);
    });
}

module.exports = connectToMongo;
