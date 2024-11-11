const API_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

import axios from 'axios';


export const getRecipes= async (query) =>{
    try{
        const res = await axios.get(`${API_URL}/complexSearch?apiKey=${API_KEY}&query=${query}`)
        return res.data;
    }catch(err){
        console.error('Error getting recipes:', err);
        res.status(500).json({ err: 'Internal server error' });
    } 
}

export const loadSavedRecipes= () => {
    try {
        const savedRecipes = localStorage.getItem('savedRecipes');
        return savedRecipes = JSON.parse(savedRecipes);
    } catch (err) {
        console.error('Error loading saved recipes:', err);
        return [];
    }
}


export const saveRecipe= (recipe) => {
    try {
        const savedRecipes = loadSavedRecipes();
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    } catch (err) {
        console.error('Error saving recipe:', err);
    }
}
