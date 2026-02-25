// const mongoose = require("mongoose");

// // Replace with your MongoDB Atlas connection string
// const mongoURI = "mongodb+srv://muzdalfazulfiqar11:Lh0zZKaUxoKE8lsf@cluster0.8dl8o.mongodb.net/RecipeMaster";

// function connectToMongo() {
//     mongoose.connect(mongoURI)
//     .then(() => {
//         console.log("Connected to MongoDB Atlas Successfully");
//     })
//     .catch((error) => {
//         console.log("Error connecting to MongoDB Atlas:", error);
//     });
// }

// module.exports = connectToMongo;


const mongoose = require("mongoose");
require('dotenv').config(); // load env variables

const mongoURI = process.env.MONGO_URI;

function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas Successfully");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB Atlas:", error);
    });
}

module.exports = connectToMongo;