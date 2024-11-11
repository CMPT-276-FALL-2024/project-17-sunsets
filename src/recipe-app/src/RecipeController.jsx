import { getRecipes } from "./RecipeModel";

//gets the recipes from the model
export const processRecipes = async (query) => {
    try {
        return await getRecipes(query);
    } catch (err) {
        console.error('Error in RecipeController:', err);
    }
};

