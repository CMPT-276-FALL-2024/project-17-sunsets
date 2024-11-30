import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import {
  getRecipes,
  getRecipeInfo,
  saveRecipe,
  loadSavedRecipes,
  deleteSavedRecipe,
} from './RecipeModel';

vi.mock('axios');

describe('RecipeModel Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore(); // Restore console.error
    vi.clearAllMocks();
  });

  // Test for getRecipes API call
  it('getRecipes fetches recipes from API with correct query', async () => {
    const mockResponse = { data: { results: [{ id: 1, title: 'Mock Recipe' }] } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await getRecipes('pasta');
    expect(result).toEqual(mockResponse.data.results);
    expect(axios.get).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/complexSearch`,
      expect.objectContaining({
        params: { apiKey: import.meta.env.VITE_API_KEY, query: 'pasta', number: 3 },
      })
    );
  });

  // Test for getRecipeInfo API call
  it('getRecipeInfo fetches recipe details', async () => {
    const mockResponse = { data: { id: 1, title: 'Mock Recipe Info' } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await getRecipeInfo(1);
    expect(result).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/1/information`,
      expect.objectContaining({
        params: { apiKey: import.meta.env.VITE_API_KEY, includeNutrition: true },
      })
    );
  });

  // Test for saveRecipe
  it('saveRecipe stores a recipe without duplicates', () => {
    const recipe = { id: 1, title: 'Recipe' };
    saveRecipe(recipe);

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    expect(savedRecipes).toEqual([recipe]);
  });

  // Test for loadSavedRecipes
  it('loadSavedRecipes retrieves recipes from local storage', () => {
    const mockRecipes = [{ id: 1, title: 'Saved Recipe' }];
    localStorage.setItem('savedRecipes', JSON.stringify(mockRecipes));

    const result = loadSavedRecipes();
    expect(result).toEqual(mockRecipes);
  });

  // Test for deleteSavedRecipe
  it('deleteSavedRecipe removes a recipe from local storage', () => {
    const mockRecipes = [{ id: 1, title: 'Recipe to Delete' }];
    localStorage.setItem('savedRecipes', JSON.stringify(mockRecipes));

    deleteSavedRecipe({ id: 1 });
    const remainingRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    expect(remainingRecipes).toEqual([]);
  });
});
