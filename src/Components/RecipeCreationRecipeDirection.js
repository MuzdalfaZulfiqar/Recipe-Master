import React from "react";
// import spinner from "../../public/spinner.svg"

function RecipeCreationRecipeDirection(props) {
  let item = props.recipe;
  // console.log(props.recipe)

  if (!item || !item.ingredients || !item.directions) {
    return <div>
      <img src="spinner.svg" alt=""/>
    </div>; // Display a loading message or a spinner while data is being fetched
  }
  let ingredientsArray = item.ingredients;
  let mappedIngredientsArray = ingredientsArray.map((ingredient)=>{
    return <p>{ingredient.name} {ingredient.quantity}</p>
  });

  let directionArray = item.directions;
  let mappedDirectionArray = directionArray.map((direction, index)=>{
      return <li>{index + 1} . {direction}</li>
  })

  return (
    <div className="directionContainer">
      {/* main ko flex colomn */}
      <div className="direction-title">
        <p>{item.name}</p>
      </div>
      <div className="direction-photo">
        <img src={item.imgURL} alt="" />
      </div>
      <div className="direction-recipe">
        <div className="direction-recipe-stats-ingredients">
          <div className="recipe-ingredients-stats">
            <div className="recipe-stats-type">
              <i className="fas fa-utensils food-icons"></i>
              <span>{item.category}</span>
            </div>
            <div className="recipe-stats-time">
              <i className="far fa-clock food-icons" ></i>
              <span>{item.time}</span>
            </div>
          </div>
          <div className="recipe-ingredients-display">
            <h3 className="ingredient-title">Ingredients</h3>
            <div className= "ingredientsList">
              {mappedIngredientsArray}
            </div>
            
            
          </div>
        </div>
        <div className="direction-recipe-method">
          <h3 className="direction-recipe-title">Direction</h3>
          <div className="directionList"></div>
            <ol>
              {mappedDirectionArray}
            </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeCreationRecipeDirection;
