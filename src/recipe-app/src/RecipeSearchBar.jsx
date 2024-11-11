import React from "react";
import { useState } from "react";
import { processRecipes } from "./RecipeController";

function RecipeSearchBar({ setRecipes }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recipes = await processRecipes(query);
      setRecipes(recipes.results);
      console.log(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default RecipeSearchBar;
