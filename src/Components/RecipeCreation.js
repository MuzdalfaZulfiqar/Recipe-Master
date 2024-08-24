import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import RecipeCreationRecipeDirection from './RecipeCreationRecipeDirection'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import recipeContext from '../Contexts/Recipe/RecipeContext';

function RecipeCreation() {
  const { id } = useParams();
  useEffect(()=>{
    getRecipe(id)
  },[])
  
  let context = useContext(recipeContext)
  let {singleRecipe, getRecipe} = context

  return (
    <div className='creationContainer'>
        <NavBar/>
        
        <RecipeCreationRecipeDirection recipe = {singleRecipe} />
        <Footer/>
      
    </div>
  )
}

export default RecipeCreation
