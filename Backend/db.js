const mongoose = require("mongoose")
const mongoURI  = "mongodb://localhost:27017/RecipeMaster"

function connectToMongo(){
    mongoose.connect(mongoURI).
    then(()=>{console.log("Connected to mongo DB Successfully")}).
    catch((error)=>{console.log(error)})
}

module.exports = connectToMongo