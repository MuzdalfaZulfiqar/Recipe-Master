
// // get express
// const express = require("express")
// const app = express()

// // cors setup
// var cors = require('cors')
// app.use(cors())


// // get mongoDB connection
// const connectToMongo = require("./db")
// // execute the mongoConnection
// connectToMongo()


// // json parsing middlewar it should be abovw the routes
// app.use(express.json())

// // import the user route file
// const userRoute = require("./routes/User")
// const recipeRoute = require("./routes/Recipe")

// // use the route 
// app.use("/api/user", userRoute)
// app.use("/api/recipe", recipeRoute)




// // mention port
// let port = 3001;
// app.listen(port, ()=>{
//     console.log("Recipe master is running on " + port)
// })



// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectToMongo();

// // Routes
// const userRoute = require("./routes/User");
// const recipeRoute = require("./routes/Recipe");
// app.use("/api/user", userRoute);
// app.use("/api/recipe", recipeRoute);

// // Port (Render sets process.env.PORT)
// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Recipe master backend is running on port ${PORT}`);
// });

require('dotenv').config(); // load env variables
const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Routes
app.use("/api/user", require("./routes/User"));
app.use("/api/recipe", require("./routes/Recipe"));

// Port (Render sets process.env.PORT)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Recipe master backend is running on port ${PORT}`);
});