import React, { useEffect } from "react";
import { useContext } from "react";
import ManageRecipesCard from "./ManageRecipesCard";
import { useNavigate } from "react-router-dom";
import recipeContext from "../Contexts/Recipe/RecipeContext";

function ManageRecipes() {
    let navigate = useNavigate()


    function handleRecipeView(id){
        navigate(`/recipes/${id}`)
    }
  let context = useContext(recipeContext);
  let { recipes, getAll } = context;

  useEffect(() => {
    getAll();
  }, []);

  let mappedRecipes = recipes.map(
    (card)=>{
         
        return (
            
             // (name , category, time,  imgURL, servings, isSaved,ingredients, directions) 
            <ManageRecipesCard
              id = {card._id}
              name = {card.name}
              url = {card.imgURL}
              type = {card.category}
              time = {card.time}  
              isSaved = {card.isSaved}
              servings = {card.servings}
              ingredients = {card.ingredients}
              directions = {card.directions}
              onViewRecipe = {handleRecipeView}          
            />
            
        )
    }
  )

  return(
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          <div className="col-md-7 container add" style={{marginTop:"40px"}}>Manage recipe</div>
        <div className="container">
            {mappedRecipes}
        </div>
      </div>
    </>
  );
}

export default ManageRecipes;
