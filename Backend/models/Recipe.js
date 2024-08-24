const mongoose = require("mongoose");
const { Schema } = mongoose;

let recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    time: {
        type: String
    },
    isSaved: {
        type: Boolean
    },
    imgURL: {
        type: String
    },
    servings: {
        type: Number
    },
    // this is an array of object where eac object has a name and a quantity
    ingredients: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        }
    }],
    directions: {
        type: [String]
    }
});

const Recipe = mongoose.model("recipe", recipeSchema);
module.exports = Recipe;
