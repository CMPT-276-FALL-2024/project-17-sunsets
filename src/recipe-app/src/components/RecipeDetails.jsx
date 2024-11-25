import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { processRecipeInfo, processSaveRecipe, processLoadSavedRecipes, processDeleteRecipe } from '../RecipeController.jsx';
import '../styles/SingleRecipePage.css'

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate(); // Initialize navigate function
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeData = await processRecipeInfo(recipeId);
                setRecipe(recipeData);

                //Check if we already saved the recipe
                const savedRecipes = processLoadSavedRecipes();
                const checkSaved = savedRecipes.some(savedRecipe => savedRecipe.id === recipeData.id);
                setSaved(checkSaved);
            } catch (err) {
                console.error("Error fetching recipe details:", err);
                setError('Failed to load recipe details.');
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!recipe) {
        return <p>Loading recipe details...</p>;
    }

    // Function to go back to the Recipes page or home page
    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleSaveRecipe = () =>{
        if(recipe){
            const savedRecipes = processLoadSavedRecipes();
            const checkSaved = savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id);
            if(checkSaved){
                processDeleteRecipe(recipe);
                alert("Recipe Unfavorited");
                setSaved(false);
            }
            else{
                processSaveRecipe(recipe);
                alert("Recipe Favorited");
                setSaved(true)
            }
        }
    }

    return (
        <div className="recipe-page-container">
            <button className="back-button" onClick={handleBack}>← Back</button>
            
            <h1 className="recipe-title">{recipe.title}</h1>
    
            <div className="recipe-content">
                <div className="recipe-main">
                    <div className="home-meal-item">
                        <div className="home-meal-img">
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                        <div className="home-meal-name">
                            <button className="home-btn" onClick={handleSaveRecipe}><i className={saved ? 'fas fa-heart' : 'far fa-heart'}></i></button>
                            <h3>{recipe.title}</h3>
                        </div>
                    </div>
                    
                    <div className="recipe-section directions">
                        <h2>Instructions:</h2>
                        <div className="instructions-content">
                            {recipe.instructions.split(/<li>|<\/li>/).map((step, index) => (
                                step && <p key={index}>{step}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="recipe-aside">
                <div className="recipe-section ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.extendedIngredients ? (
                            recipe.extendedIngredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.amount} {ingredient.measures.us.unitLong} {ingredient.name}
                                </li>
                            ))
                        ) : (
                                <p>No ingredients available.</p>
                        )}
                    </ul>
                    </div>

                    <div className="recipe-section nutrition-facts">
                        <h2>Nutrition Facts</h2>
                        <ul>
                            {recipe.nutrition?.nutrients ? (
                                recipe.nutrition.nutrients.slice(0, 15).map((nutrient, index) => (
                                    <li key={index}>
                                        {nutrient.name}: {nutrient.amount} {nutrient.unit} ({nutrient.percentOfDailyNeeds}% of daily needs)
                                    </li>
                                ))
                            ) : (
                                <p>No nutrition facts available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
