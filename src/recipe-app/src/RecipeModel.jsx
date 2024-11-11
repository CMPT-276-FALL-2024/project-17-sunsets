const API_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

import axios from 'axios';


export const getRecipes= async () =>{
        axios.get(`${API_URL}/complexSearch?apiKey=${API_KEY}&query=chicken`)
        .then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })
}

export const loadSavedRecipes= () => {
    


}


export const saveRecipe= () => {
    
}
