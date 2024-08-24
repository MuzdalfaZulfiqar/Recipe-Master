import React from 'react'
import RecipeData from './RecipeData'
import RecipeCategoryCard from './RecipeCategoryCard'

function RecipeCategoryContainer() {
    let categoryArray = RecipeData.map((category)=>{
        return (
            <RecipeCategoryCard
                url = {category.url}
                type = {category.type}
            />
        )
    })
  return (
    <div className='recipeCategoryContainer'>
        {categoryArray}
    </div>
  )
}

export default RecipeCategoryContainer