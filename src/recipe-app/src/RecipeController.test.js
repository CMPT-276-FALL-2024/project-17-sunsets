import {
  processRecipes,
  processRecipeInfo,
  getRandomEggRecipes,
  processSaveRecipe,
  processLoadSavedRecipes,
  processDeleteRecipe,
  processRandomRecipes,
} from './RecipeController';
import * as RecipeModel from './RecipeModel';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('./RecipeModel', () => ({
  getRecipes: vi.fn(),
  getRecipeInfo: vi.fn(),
  getRandomRecipes: vi.fn(),
  loadSavedRecipes: vi.fn(),
  saveRecipe: vi.fn(),
  deleteSavedRecipe: vi.fn(),
}));

describe('RecipeController Tests', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore(); // Restore console.error
    vi.clearAllMocks();
  });

  it('processRecipes calls getRecipes and returns results', async () => {
    const mockData = [{ id: 1, title: 'Mock Recipe' }];
    RecipeModel.getRecipes.mockResolvedValue(mockData);

    const result = await processRecipes('pasta');
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRecipes).toHaveBeenCalledWith('pasta');
  });

  it('processRecipeInfo calls getRecipeInfo and returns details', async () => {
    const mockInfo = { id: 1, title: 'Mock Recipe Info' };
    RecipeModel.getRecipeInfo.mockResolvedValue(mockInfo);

    const result = await processRecipeInfo(1);
    expect(result).toEqual(mockInfo);
    expect(RecipeModel.getRecipeInfo).toHaveBeenCalledWith(1);
  });

  it('getRandomEggRecipes fetches egg recipes', async () => {
    const mockData = [{ id: 1, title: 'Egg Recipe' }];
    RecipeModel.getRecipes.mockResolvedValue(mockData);

    const result = await getRandomEggRecipes();
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRecipes).toHaveBeenCalledWith('', 3, 'egg');
  });

  it('processSaveRecipe saves a recipe', () => {
    const recipe = { id: 1, title: 'New Recipe' };
    processSaveRecipe(recipe);
    expect(RecipeModel.saveRecipe).toHaveBeenCalledWith(recipe);
  });

  it('processLoadSavedRecipes loads saved recipes', () => {
    const mockSavedRecipes = [{ id: 1, title: 'Saved Recipe' }];
    RecipeModel.loadSavedRecipes.mockReturnValue(mockSavedRecipes);

    const result = processLoadSavedRecipes();
    expect(result).toEqual(mockSavedRecipes);
  });

  it('processDeleteRecipe deletes a recipe', () => {
    const recipe = { id: 1, title: 'Recipe to Delete' };
    processDeleteRecipe(recipe);
    expect(RecipeModel.deleteSavedRecipe).toHaveBeenCalledWith(recipe);
  });

  it('processRandomRecipes fetches random recipes', async () => {
    const mockData = [{ id: 1, title: 'Random Recipe' }];
    RecipeModel.getRandomRecipes.mockResolvedValue(mockData);

    const result = await processRandomRecipes();
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRandomRecipes).toHaveBeenCalled();
  });
});
