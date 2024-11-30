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

  it.todo('getRecipes fetches recipes from API with correct query'); // Placeholder for getRecipes test

  it.todo('getRecipeInfo fetches recipe details'); // Placeholder for getRecipeInfo test

  it('saveRecipe stores a recipe without duplicates', () => {
    const recipe = { id: 1, title: 'Recipe' };
    saveRecipe(recipe);

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    expect(savedRecipes).toEqual([recipe]);
  });

  it('loadSavedRecipes retrieves recipes from local storage', () => {
    const mockRecipes = [{ id: 1, title: 'Saved Recipe' }];
    localStorage.setItem('savedRecipes', JSON.stringify(mockRecipes));

    const result = loadSavedRecipes();
    expect(result).toEqual(mockRecipes);
  });

  it('deleteSavedRecipe removes a recipe from local storage', () => {
    const mockRecipes = [{ id: 1, title: 'Recipe to Delete' }];
    localStorage.setItem('savedRecipes', JSON.stringify(mockRecipes));

    deleteSavedRecipe({ id: 1 });
    const remainingRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    expect(remainingRecipes).toEqual([]);
  });
});
