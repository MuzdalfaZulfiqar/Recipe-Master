import React from "react";
import { useContext } from "react";
import recipeContext from "../Contexts/Recipe/RecipeContext";

function AddRecipe() {

  
  let context = useContext(recipeContext)
  let {recipes, addRecipe} = context

  let [formData, setFormData] = React.useState({
    name: "",
    category: "",
    time: "",
    isSaved: false,
    imgURL: "",
    servings: "",
    ingredients: 0, // Total number of ingredients
    directions: 0,
    ingredientList: [], // Array to hold individual ingredient fields
    directionsList: [], // Array to hold individual ingredient fields
  });

  // this handle change is to deal with the formdata change

  function handleChange(event) {
    let { value, name } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // dealing with the chnage in name of the Ingredient
  function handleIngredientChange(index, event) {
    // make a copy of array
    const updatedIngredients = [...formData.ingredientList];
    //  at the index sent store the new value
    updatedIngredients[index].name = event.target.value;
    setFormData((prevForm) => ({
      ...prevForm,
      ingredientList: updatedIngredients,
    }));
  }

  // dealing with the chnage in qty of the Ingredient
  function handleIngredientQuantityChange(index, event) {
    // make a copy of array
    const updatedIngredients = [...formData.ingredientList];
    //  at the index sent store the new value
    updatedIngredients[index].quantity = event.target.value;
    setFormData((prevForm) => ({
      ...prevForm,
      ingredientList: updatedIngredients,
    }));
  }
  // when admin will add the total number of ingredients we will update the value in the form and we will
  // update the length of array by creating a new array with initail values as ""
  function handleIngredientsChange(event) {
    const value = event.target.value;
    setFormData((prevForm) => ({
      ...prevForm,
      ingredients: value,
      ingredientList: Array.from({ length: value }, (_, i) => ({
        name: "",
        quantity: "",
      })),
    }));
  }

  // called to deal with the change when any new direction item will be added
  function handleDirectionsChange(index, event) {
    // make a copy of array
    const updatedDirections = [...formData.directionsList];
    //  at the index sent store the new value
    updatedDirections[index] = event.target.value;
    setFormData((prevForm) => ({
      ...prevForm,
      directionsList: updatedDirections,
    }));
  }

  // called when the directions is upadted and now we need to update the length of our array to adjust the recipes
  function handleDirectionChange(event) {
    const value = event.target.value;
    setFormData((prevForm) => ({
      ...prevForm,
      directions: value,
      directionsList: Array.from({ length: value }, (_, i) => ""),
    }));
  }

  // (name , category, time,  imgURL, servings, isSaved,ingredients, directions) 
  function handleSubmit(event) {
    event.preventDefault();
    addRecipe(formData.name,formData.category, formData.time, formData.imgURL, formData.servings, formData.isSaved, formData.ingredientList, formData.directionsList)
    console.log(formData.directionsList);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="col-md-7 container add" style={{marginTop:"40px"}}>Add a recipe</div>
      <div className="my-5">
        <form className="col-md-7 container mt-2" onSubmit={handleSubmit}>
          
          <div className="form-group my-2">
            <label htmlFor="name">Name</label>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              className="form-control inputBorder"
              id="name"
              placeholder="Enter name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="category"
              placeholder="Enter category"
              value={formData.category}
              name="category"
              onChange={handleChange}
            />
          </div>

          <div className="form-group my-2">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="time"
              placeholder="Enter time (e.g., 1hr 30min)"
              value={formData.time}
              name="time"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="imgURL">Image URL</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="imgURL"
              placeholder="Enter image URL"
              value={formData.imgURL}
              name="imgURL"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="servings">Servings</label>
            <input
              type="text"
              className="form-control inputBorder"
              id="servings"
              placeholder="Enter servings"
              value={formData.servings}
              name="servings"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="ingredients">Total Ingredients</label>
            <input
              type="number"
              className="form-control inputBorder"
              id="ingredients"
              placeholder="Enter total # of ingredients"
              value={formData.ingredients}
              name="ingredients"
              // here we need to deal with the number of ingredient fields we want so we are calling the function that will check what was the total number of ingredients and based on that we will update our ingredientarray
              onChange={handleIngredientsChange}
            />
          </div>

          {/* now we have got out ingredients fields we can enter the data in them 
the fields will be displayed


*/}
          {formData.ingredientList.map((ingredient, index) => (
            <div key={index} className="form-group my-2">
              <label htmlFor={`ingredient-${index}`}>
                Ingredient {index + 1}
              </label>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "8px" }}
              >
                <input
                  type="text"
                  className="form-control inputBorder"
                  id={`ingredient-${index}`}
                  placeholder={`Enter name `}
                  value={ingredient.name}
                  onChange={(event) => handleIngredientChange(index, event)}
                />
                <input
                  type="text"
                  className="form-control inputBorder"
                  id={`ingredient-${index}`}
                  placeholder={`Enter quantity`}
                  value={ingredient.quantity}
                  onChange={(event) =>
                    handleIngredientQuantityChange(index, event)
                  }
                />
              </div>
            </div>
          ))}

          <div className="form-group my-2">
            <label htmlFor="directions">Total Directions</label>
            <input
              type="number"
              className="form-control inputBorder"
              id="directions"
              placeholder="Enter total # of directions"
              value={formData.directions}
              name="directions"
              // here we need to deal with the number of ingredient fields we want so we are calling the function that will check what was the total number of ingredients and based on that we will update our ingredientarray
              onChange={handleDirectionChange}
            />
          </div>
          {formData.directionsList.map((directions, index) => (
            <div key={index} className="form-group my-2">
              <label htmlFor={`directions-${index}`}>
                Direction {index + 1}
              </label>

              <input
                type="text"
                className="form-control inputBorder"
                id={`directions-${index}`}
                placeholder={`Enter direction `}
                value={directions}
                onChange={(event) => handleDirectionsChange(index, event)}
              />
            </div>
          ))}

          <button
            style={{ margin: "20px" }}
            type="submit"
            className="submitButton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
