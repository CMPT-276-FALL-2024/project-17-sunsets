import React from 'react'
import { useState } from 'react';
import RecipeSearchBar from './RecipeSearchBar'

function RecipeView () {
  const [recipes, setRecipes] = useState([]); 

  return (
    <div>
    <RecipeSearchBar setRecipes={setRecipes}/>
    </div>
  )
}

export default RecipeView
