// express setup
const express = require("express");
// get the use schema
const User = require("../models/User");
// get the router
const router = express.Router();
// express-valiadator setup
const { body, validationResult } = require("express-validator");
// bcrypt js setup
const bcrypt = require("bcryptjs");
// jsonwebtoken setup
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const jwt_Secret = "RecipeMaster";
let success = true;

router.post(
  // route
  "/createUser",
  // validation array

  [
    body("name", "Name must be at least 3 chars").isLength({ min: 3 }),
    body("email", "Not a valid email").isEmail(),
    body("password", "Password must be at least 3 chars").isLength({ min: 5 }),
  ],
  // handler functions
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    try {
      // check if the user with this email already exists or not
      let user = await User.findOne({ email: req.body.email });
      // if yes
      if (user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "User with this email already exists" });
      }

      // now we need to deal with our password hashing
      const salt = await bcrypt.genSalt(10);
      // use the password from the request body and the salt to create a hashed password
      const securePassword = await bcrypt.hash(req.body.password, salt);

      // if no create it
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });
      success = true
      return res.json({success, user});
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
);

// route 2- login a user

router.post(
  "/login",
  [
    body("email", "Not a valid email").isEmail(),
    body("password", "Password must be at least 3 chars").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // check for errors in request body
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({success,  error: errors.array() });
    }

    try {
      // check if the user with this email already exists or not
      let user = await User.findOne({ email: req.body.email });
      // if yes
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "This email does not exist" });
      }

      // if we have found the user with such email then the user will heve the whole data of that user
      // so we will get the password from that user now we need need to compare these
      let comparedPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!comparedPassword) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "This password does not exist" });
      }

      // we got the secure password and email now comes the token game
      // first we need a payload which will be in this case
      let data = {
        user: {
          id: user._id,
        },
      };
      let token = jwt.sign(data, jwt_Secret);
      success = true
      return res.json({success, token});
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
);

router.get(
    // our router
    "/getUser",
    // our middleware to get the id of the user who just logged in with this id server will get this user from db
    fetchUser,
    // handler function
    async (req, res) => {
        try {
            // got the id
            let userid = req.user.id;
            // search in db and get all properties except for the password
            let user = await User.findById({"_id" : userid}).select("-password");
            if (!user) {
                return res.status(400).json({ error: " User does not exixt" });
            }
            // console.log(user)
            res.send(user)
            // return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
});

router.post("/updateUser/:id", 
// the id passed here will be the one that we will get from getUser where it will automatically detect from fetch user middleware that which user it was
  async (req,res)=>{
    try {
      // the userid from the fetchuser verfied from token

      let id = req.params.id
      let user;
 
        
        user = await User.findById({"_id":id})
        
        
      // }
      // if we did not get the user show msg that cannot find the user
      if(!user){
        return res.status(400).json("Cannot find user");
      }

      // we can find the user now recipeId will be the id that we can use to store in db
      let {recipeId} = req.body;
      

      // make a new user and a new array
      let newUser = {}
         // make a new array so that it can store the incoming recipeid that the user has saved
      let newArray = []
      // get the array of the savedRecipes from user you find out
      let recipesArray = user.savedRecipes
      
      // check if the user has stored the current recipe already or not (if not save it else )
      if(!recipesArray.includes(recipeId)){
        newArray = [...recipesArray, recipeId]
       
       
      }
      else{
        newArray = [...savedRecipes]
      }
      
      // in the place of saved recipes now store the new array
      newUser.savedRecipes = newArray
      
      let updatedUser = await User.findByIdAndUpdate(id, {$set :  newUser}, {new : true})
      res.send(updatedUser)

    } catch (error) {
      // console.log("came")
      res.send(error)
    }
   
  }
)

module.exports = router;
