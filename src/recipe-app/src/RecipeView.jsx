import React from "react";
import { useState, useEffect } from "react";
import RecipeSearchBar from "./RecipeSearchBar";
import { processRecipeInfo } from "./RecipeController";

function RecipeView() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleClick = async (id) => {
    try {
      const recipeInfo = await processRecipeInfo(id);
      console.log(recipeInfo)
      setSelectedRecipe(recipeInfo);
    } catch (err) {
      console.error("Error fetching recipe details", err);
    }
  };

  return (
    <div>
      <RecipeSearchBar setRecipes={setRecipes} />
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <li key={recipe.id} onClick={() => handleClick(recipe.id)}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </ul>
      {selectedRecipe && (
        <div>
          <h2>Recipe Information</h2>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.extendedIngredients
              .filter((ingredient) => ingredient.name && ingredient.amount)
              .map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </li>
              ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
          <h3>Nutrition:</h3>
          <ul>
            {selectedRecipe.nutrition.nutrients.map((nutrient, index) => (
              <li key={index}>
                {nutrient.name}: {nutrient.amount} {nutrient.unit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipeView;
