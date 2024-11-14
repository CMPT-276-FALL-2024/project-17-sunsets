import { getRecipeInfo, getRecipes } from "./RecipeModel";


export const processRecipes = async (query) => {
    try {
        const response = await getRecipes(query); // Call your API fetching function
        return response; // Make sure this is an array of recipes with name and imageUrl properties
    } catch (err) {
        console.error('Error in RecipeController:', err);
        throw new Error('Error processing recipes');
    }
};


export const processRecipeInfo = async (recipeId) => {
    try {
        return await getRecipeInfo(recipeId);
    } catch (err) {
        console.error('Error in RecipeController processRecipeInfo', err);
        throw new Error('Error processing recipe info');
    }
};

// Function to get 3 random "egg" recipes for the home page
export const getRandomEggRecipes = async () => {
    try {
        return await getRecipes('', 3, 'egg'); // Fetches 3 recipes with "egg"
    } catch (err) {
        console.error('Error in getRandomEggRecipes:', err);
        throw new Error('Error fetching random egg recipes');
    }
};
