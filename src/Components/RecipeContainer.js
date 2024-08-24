import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import recipeContext from "../Contexts/Recipe/RecipeContext";


export default function RecipeContainer(){
  let navigate = useNavigate()


    function handleRecipeView(id){
        navigate(`/recipes/${id}`)
    }

    let context = useContext(recipeContext)
    let {recipes, getAll} = context

    useEffect(()=>{
      getAll();
    },[])

    let eightRecipesData = recipes.slice(0,8)
    let newRecipeData = eightRecipesData.map(
      (card)=>{
         
        return (
            
            <RecipeCard
              id = {card._id}
              name = {card.name}
              url = {card.imgURL}
              type = {card.category}
              time = {card.time}  
              isSaved = {card.isSaved}
              onViewRecipe = {handleRecipeView}          
            />
            
        )
    })

    return(
        <div className="recipesContainer">
        <div className="recipeSectionTitle">
          <h2 className="recipesSectionTitle-Span">Recipes</h2>
        </div>
        <div className="recipesSection">
          {newRecipeData}
        </div>
      </div>
    )
}