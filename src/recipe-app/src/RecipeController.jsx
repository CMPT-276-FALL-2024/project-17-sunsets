import { deleteSavedRecipe, getRandomRecipes, getRecipeInfo, getRecipes, loadSavedRecipes, saveRecipe } from "./RecipeModel";


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


export const processSaveRecipe =(recipe)=>{
  try{
    saveRecipe(recipe);
  }
  catch(err){
    console.error('Error in saving recipe', err);
    throw new Error("Error in saving recipe");
  }
}

export const processLoadSavedRecipes = ()=>{
  try{
    return loadSavedRecipes();
  }
  catch(err){
    console.error('Error in loading saved recipe', err);
    throw new Error("Error in loading saved recipe");
  }
}

export const processDeleteRecipe = (recipe)=>{
  try{
    deleteSavedRecipe(recipe);
  }
  catch(err){
    console.error('Error in deleting saved recipe', err);
  }
}

export const processRandomRecipes = async () => {
  try {
      const response = await getRandomRecipes();
      return response;
  } catch (err) {
      console.error('Error in RecipeController processRecipeInfo', err);
      throw new Error('Error processing recipe info');
  }
};