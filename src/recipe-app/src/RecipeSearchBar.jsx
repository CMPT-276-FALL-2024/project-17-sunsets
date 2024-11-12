import React from "react";
import { useState } from "react";
import { processRecipes } from "./RecipeController";

function RecipeSearchBar({ setRecipes }) {
  const [query, setQuery] = useState("");
 

  const handleSearchBar = async (e) => {
    e.preventDefault();
 
    try {
      const recipes = await processRecipes(query); //Call the controller to get recipes
    setRecipes(recipes);  
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };
  
  return (
    <div>
    <form onSubmit={handleSearchBar}>
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  </div>
  );
}

export default RecipeSearchBar;
