const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required : true,
    unique : true
  },
  password : {
    type : String
  },
  date : {
    type : Date,
    default : Date.now
},
savedRecipes:{
   type :[Schema.Types.ObjectId]
}
// will inclue the default data
});


const User = mongoose.model("user", userSchema)
module.exports = User