
// get express
const express = require("express")
const app = express()

// cors setup
var cors = require('cors')
app.use(cors())


// get mongoDB connection
const connectToMongo = require("./db")
// execute the mongoConnection
connectToMongo()


// json parsing middlewar it should be abovw the routes
app.use(express.json())

// import the user route file
const userRoute = require("./routes/User")
const recipeRoute = require("./routes/Recipe")

// use the route 
app.use("/api/user", userRoute)
app.use("/api/recipe", recipeRoute)




// mention port
let port = 3001;
app.listen(port, ()=>{
    console.log("Recipe master is running on " + port)
})
