// express setup
const express = require("express");
// get the use schema
const Recipe = require("../models/Recipe");
// get the router
const router = express.Router();
// express-valiadator setup
const { body, validationResult } = require("express-validator");
let success = true;

// route - 1 create a recipe but this section does not need the user id 
router.post("/createRecipe",
    [
        body("name", "There must be a name of recipe").exists(),
        body("ingredients", "The ingredients section cannot be empty").isLength({min : 1})
    ],
    async (req, res) => { 
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            success = false;
            return res
              .status(400)
              .json({ success, error: errors });
        }

        try {
            let recipe = await Recipe.create({
                name : req.body.name,
                category : req.body.category,
                time : req.body.time,
                isSaved : req.body.isSaved,
                imgURL : req.body.imgURL,
                servings : req.body.servings,
                ingredients : req.body.ingredients,
                directions : req.body.directions
            })
            res.send(recipe)
        } catch (error) {
            res.send(error)
        }
    }
) 

router.put(
    "/updateRecipe/:id",
    [
        body("name", "There must be a name of recipe").exists(),
        body("ingredients", "The ingredients section cannot be empty").isLength({min : 1})
    ],
    async (req,res)=>{
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            success = false;
            return res
              .status(400)
              .json({ success, error: errors });
        }
        let {name , category, time,  imgURL, servings, isSaved,ingredients, directions} = req.body
        try {
               // first check if it exist or not 
        let recipeId = req.params.id
        let recipe = await Recipe.findById({"_id" : recipeId})
        if(!recipe){
            success = false;
            return res
              .status(400)
              .json({ success, error: "No recipe"});
        }
        // found the recipe now update in db

        let updatedRecipe = {}
        
        if(name) {updatedRecipe.name = name } 
        if(category)  {updatedRecipe.category = category}
        if(time) {updatedRecipe.time =time}
        if(isSaved) {updatedRecipe.isSaved =isSaved}
        if(imgURL) {updatedRecipe.imgURL =imgURL}
        if(servings) {updatedRecipe.servings = servings}
        if(ingredients) {updatedRecipe.ingredients = ingredients}
        if(directions) { updatedRecipe.directions =directions}
        // it works as find the recipe got it no okay error got it yes move on make a new object did you got some values in the req body if yes then append them in new object now newObject you go to this particular id and then there will be an object the new values you got from here to there update them in the obejct and that's it

        let dbGotRecipe = await Recipe.findByIdAndUpdate(recipeId, {$set :  updatedRecipe}, {new : true})
        success = true
        res.send({success, dbGotRecipe})
            
        } catch (error) {
            success = false
            return res
            .status(400)
            .json({ success, error: "Nothing but an error"});
        }

     
    }
)

router.get("/getAllRecipes",
    async (req,res)=>{
    try {
        // get all recipes
        let recipes  = await Recipe.find({});

        res.send(recipes)
    } catch (error) {
        return res
        .status(400)
        .json({ success, error: "Nothing but an error"});
    }
})

router.get("/getAllRecipes/:category",
    async (req,res)=>{
    try {
        // get all recipes
        let searchCategory = req.params.category
        let recipes  = await Recipe.find({category : searchCategory});
        res.send(recipes)
    } catch (error) {
        return res
        .status(400)
        .json({ success, error: "Nothing but an error"});
    }
})

// this will give us a single recipe
router.get("/getRecipe/:id",
    async (req,res)=>{
        try {
            let recipe = await Recipe.findOne({_id : req.params.id})
        if(!recipe){
            success = false;
            return res
              .status(400)
              .json({ success, error: "No recipe"});
        }
        // console.log("yes")
        res.send(recipe)
        } catch (error) {
            return res
            .status(400)
            .json({ success, error: "Nothing but an error"});
        }
        
    }
)

router.delete("/deleteRecipe/:id", 
    async (req, res)=>{
        try {
            let deleteid = req.params.id;
            let recipe = await Recipe.findById({"_id" : deleteid})
            if(!recipe){
                success = false;
                return res
                  .status(400)
                  .json({ success, error: "No recipe"});
            }
            // found the recipe now update in db

            success = true
            let deletedRecipe = await Recipe.findByIdAndDelete(deleteid)
            res.json({success, deletedRecipe})
        } catch (error) {
            return res
            .status(400)
            .json({ success, error: "Nothing but an error"});
        }
})
module.exports = router;