import { getRecipeInfo, getRecipes } from "./RecipeModel";

//gets the recipes from the model
export const processRecipes = async (query) => {
    try {
        return await getRecipes(query);
    } catch (err) {
        console.error('Error in RecipeController:', err);
    }
};

export const processRecipeInfo = async (recipeId) => {
    try {
      const recipeDetails = await getRecipeInfo(recipeId);
      return recipeDetails;
    } catch (err) {
      console.error('Error in processRecipeInfo', err);
    }
  };