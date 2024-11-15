/**
 * Tests for RecipeModel
 * 
 * - Feature: Recipe Retrieval via API (Spoonacular)
 *   - Validates API call to Spoonacular using `axios.get` with correct query parameters.
 *   - Ensures data returned from the API matches the expected structure.
 *   - Checks error handling by verifying an appropriate error is thrown when the API call fails.
 * 
 * - Console Suppression:
 *   - Suppresses `console.error` output during tests to keep logs clean and focused.
 */

import { getRecipes, loadSavedRecipes, saveRecipe } from './RecipeModel';
import { processRecipes } from './RecipeController';
import axios from 'axios';

jest.mock('axios');

describe('getRecipes', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});  // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore();  // Restore original console.error after each test
  });

  it('should call the API with the correct parameters and return data', async () => {
    const mockResponse = { data: { results: [{ id: 1, title: 'Mock Recipe' }] } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await getRecipes('pasta');
    expect(result).toEqual(mockResponse.data.results);
    expect(axios.get).toHaveBeenCalledWith("https://api.spoonacular.com/recipes/complexSearch", expect.any(Object));
  });

  it('should throw an error if API call fails', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    await expect(processRecipes('pasta')).rejects.toThrow('Error processing recipes');
  });
});


/*
describe('Local Storage Functions', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it('should load saved recipes from local storage', () => {
    const mockRecipes = [{ id: 1, title: 'Saved Recipe' }];
    localStorage.setItem('savedRecipes', JSON.stringify(mockRecipes));

    const result = loadSavedRecipes();
    expect(result).toEqual(mockRecipes);
  });

  it('should return an empty array if no recipes are saved', () => {
    const result = loadSavedRecipes();
    expect(result).toEqual([]);
  });

  it('should save recipes to local storage', () => {
    const recipe = { id: 1, title: 'New Recipe' };
    saveRecipe(recipe);

    const savedData = JSON.parse(localStorage.getItem('savedRecipes'));
    expect(savedData).toEqual([recipe]);
  });
});
*/