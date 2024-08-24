import React from 'react'
import Footer from './Footer';
import RecipesPageRecipeContainer from './RecipesPageRecipeContainer';
import NavBar from './NavBar';
function Recipes() {
  return (
    <div className='recipePage'> 
      <NavBar/>
      <RecipesPageRecipeContainer/>
      <Footer/>
    </div>
  )
}

export default Recipes
