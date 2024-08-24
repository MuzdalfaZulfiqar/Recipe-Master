import RecipeCard from "./RecipeCard";
import React from "react";
import { useContext, useEffect } from "react";
import recipeContext from "../Contexts/Recipe/RecipeContext";
import { useNavigate } from "react-router-dom";
import RecipeData from "./RecipeData";
import RecipeCategoryCard from "./RecipeCategoryCard";

function RecipesPageRecipeContainer() {
  // this hook is being used here to navigate to the current recipePage
  let navigate = useNavigate();
  function handleRecipeView(id) {
    navigate(`/recipes/${id}`);
  }

  function handleRecipeClick(category) {
    if(category === "All"){
      getAll();
    }
    else{

      getRecipeByCategory(category);
    }
  }
  // this is the context that is being used
  let context = useContext(recipeContext);
  let { recipes, getAll, getRecipeByCategory } = context;

  // this is to get all notes
  useEffect(() => {
    getAll();
  }, []);


  // the recipes that we are fetching from the db 
  let newRecipeData = recipes.map((card) => {
    return (
      <RecipeCard
        id={card._id}
        name={card.name}
        url={card.imgURL}
        type={card.category}
        time={card.time}
        onViewRecipe={handleRecipeView}
      />
    );
  });

  // the array for category section
  let categoryArray = RecipeData.map((category) => {
    return (
      <RecipeCategoryCard
        url={category.url}
        type={category.type}
        onCategoryClick={handleRecipeClick}
      />
    );
  });

  return (
    <div className="recipesContainerOne">
      {/* This is to display all the categories cards */}
      <div>
        <div className="recipeCategoryContainer">{categoryArray}</div>
      </div>
      {/* the title of the page */}
      <div className="recipeSectionTitle">
        <h2 className="recipesSectionTitle-Span">Recipes</h2>
      </div>
      {/* all recipes that needs to be displayed */}
      <div className="recipesSection">{newRecipeData}</div>
    </div>
  );
}

export default RecipesPageRecipeContainer;
