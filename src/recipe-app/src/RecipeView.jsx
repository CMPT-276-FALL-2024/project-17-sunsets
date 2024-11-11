import React from 'react'
import { useState } from 'react';
import RecipeSearchBar from './RecipeSearchBar'

function RecipeView () {

  const [query, setQuery] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [recipes, setRecipes] = useState([]); 

  return (
    <div>
    <RecipeSearchBar
        query={query}
        setQuery={setQuery}
       //handleSearch={handleSearch}
        loading={loading}
      />
    </div>
  )
}

export default RecipeView
