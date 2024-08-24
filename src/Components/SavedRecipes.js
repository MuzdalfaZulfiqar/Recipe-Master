import React, { useEffect } from "react";
import { useContext } from "react";
import recipeContext from "../Contexts/Recipe/RecipeContext";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function SavedRecipes() {
  // we need this state to deal with the array where we will be storing the new complete recipe data after matching the recipe id which user has stored
  // the state is needed because we are running our function in the useEffect and it will run in end so to make it our array also updated we need the array
  let [saved, setSaved] = React.useState([]);
  let navigate = useNavigate();

  function handleRecipeView(id) {
    navigate(`/recipes/${id}`);
  }

  let context = useContext(recipeContext);
  // use the context to get the recipes
  let { recipes, getAll } = context;

  // So, your understanding is correct: the first useEffect fetches all the recipe data, and the second useEffect uses that data to fetch the user and filter the recipes based on what the user has saved. This flow ensures that only the user's saved recipes are displayed in the component.

  // first this useEffect runs and gets all recipes becuase we need them in second use effect
  useEffect(() => {
    getAll();
    // eslint-disable-next-line
  }, []);

  // here it calls after the second use effect and will get the saved recipes
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  // array to store the recipes id saved by particular user
  let savedRecipes = [];
  // array to get the complete recipe data
  let savedRecipesArray = [];

  // here we need to make the request to get the user and then from that we will get the recipes array
  // now we need to fetchh that particular recipe from db

  async function getUser() {
    try {
      let response = await fetch("http://localhost:3001/api/user/getUser", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      let user = await response.json();

      // we have got the user now we need to deal with the recipes we have stored them in an array
      savedRecipes = user.savedRecipes;

      // we will now run a filter method on original all recipes and we will filter those recipes whose id matches the id of those which the user have saved
      savedRecipesArray = recipes.filter((recipe) => {
        return savedRecipes.includes(recipe._id);
      });
      setSaved(savedRecipesArray);
      // console.log( savedRecipesArray)
    } catch (error) {
      console.log(error);
    }
  }

  let mappedSavedRecipeArray = saved.map((card) => {
    return (
      <RecipeCard
        id={card._id}
        name={card.name}
        url={card.imgURL}
        type={card.category}
        time={card.time}
        isSaved={card.isSaved}
        onViewRecipe={handleRecipeView}
      />
    );
  });
  return (
    <div className="creationContainer">
      <NavBar />

      <div style={{ height: "300vh" }} className="recipesContainer">
        <div className="recipeSectionTitle">
          <h2 className="recipesSectionTitle-Span">Recipes</h2>
        </div>
        {mappedSavedRecipeArray.length ==0 && <h2>You do not any saved recipes yet</h2>}
        <div className="recipesSection">
          
          
          {mappedSavedRecipeArray}</div>
      </div>
    </div>
  );
}

export default SavedRecipes;
