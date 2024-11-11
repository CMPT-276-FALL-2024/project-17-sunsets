import React from 'react'
import { useState, useEffect } from 'react';
import RecipeSearchBar from './RecipeSearchBar'

function RecipeView () {
  const [recipes, setRecipes] = useState([]); 


  
  useEffect(() => { //Once recipes are populated, this gets called
    console.log(recipes);
  }, [recipes]);

  return (
    <div>
    <RecipeSearchBar setRecipes={setRecipes}/>

    <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </ul>
    </div>
  )
}

export default RecipeView
