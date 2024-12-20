const API_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;


import axios from 'axios';

export const getRecipes = async (query, number = 3) => {
    try {
        const res = await axios.get(`${API_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query,
                number,
            }
        });
        const recipes = res.data.results;
        return recipes;

         //If we use Recipe Bulk Info
        //recipes without information & grab the ids
        // const recipeIds = recipes.map(recipe => recipe.id);

        // //recipes with information (pass the ids)
        //  const recipeInfo = await getRecipeInfoBulk(recipeIds);

        // const modifiedRecipes = recipes.map((recipe, index) => ({
        //   ...recipe, //copy elements into a new object
        //   information: recipeInfo[index],  // Attach detailed information
        //  }));
        //  console.log(modifiedRecipes);
        // return modifiedRecipes;
    } catch (err) {
        console.error('Error getting recipes', err);
        throw new Error('Internal server error');
    }
};

export const getRecipeInfo = async (recipeId) => {
    try {
        const res = await axios.get(`${API_URL}/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=true`);
        // console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Error getting recipe details', err);
        throw new Error('Internal server error');
    }
};

export const getRecipeInfoBulk = async (recipeIds) =>{

    try{
        const ids = recipeIds.join(',');
        const res = await axios.get(`${API_URL}/informationBulk?apiKey=${API_KEY}&ids=${ids}`);
        return res.data;
    }catch(err){
        console.error('Error getting recipe information bulk', err);
        res.status(500).json({ err: 'Internal server error' });
    }
}

export const loadSavedRecipes= () => {
    try {
        const savedRecipes = localStorage.getItem('savedRecipes');
        if(!savedRecipes){
            return [];
        }
        return JSON.parse(savedRecipes);
    } catch (err) {
        console.error('Error loading saved recipes', err);
        return [];
    }
}

export const saveRecipe= (recipe) => {
    try {
        const savedRecipes = loadSavedRecipes();
        //check if there is already a recipe that has the same recipe id in the list
        const recipeExists = savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id); 
        
        if (recipeExists) {
            console.log('Recipe is already saved');
            return;
        }

        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes)); //key & value
    } catch (err) {
        console.error('Error saving recipe', err);
    }
}

export const deleteSavedRecipe = (recipe) =>{
    try{
        const savedRecipes = loadSavedRecipes();
        //Saved Recipes list without the recipe to be deleted
        const delRecipeList = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
        localStorage.setItem('savedRecipes', JSON.stringify(delRecipeList));
    }
    catch(err){
        console.error('Error deleting saved recipe', err);
    }
}

export const getRandomRecipes = async () => {
    try {
        const res = await axios.get(`${API_URL}/random?apiKey=${API_KEY}&number=3`);
        return res.data.recipes;
    } catch (err) {
        console.error('Error getting random recipes', err);
        throw new Error('Internal server error');
    }
};