import React, { useState } from "react";
import { processRecipes } from "./RecipeController";

function RecipeSearchBar({ setRecipes }) {
    const [query, setQuery] = useState("");

    const handleSearchBar = async (e) => {
        e.preventDefault();
        try {
            const recipes = await processRecipes(query);
            setRecipes(recipes);
        } catch (error) {
            console.error("Error fetching recipes", error);
        }
    };

    return (
        <form onSubmit={handleSearchBar}>
            <input
                type="text"
                className="search-bar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
            />
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}

export default RecipeSearchBar;
