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

jest.mock('./RecipeModel', () => ({
  getRecipes: jest.fn(),
  getRecipeInfo: jest.fn(),
  getRandomRecipes: jest.fn(),
  loadSavedRecipes: jest.fn(),
  saveRecipe: jest.fn(),
  deleteSavedRecipe: jest.fn(),
}));

describe('RecipeController Tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore(); // Restore console.error
    jest.clearAllMocks();
  });

  // Test for processRecipes function
  // Expect: Calls getRecipes with query and returns data
  test('processRecipes calls getRecipes and returns results', async () => {
    const mockData = [{ id: 1, title: 'Mock Recipe' }];
    RecipeModel.getRecipes.mockResolvedValue(mockData);

    const result = await processRecipes('pasta');
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRecipes).toHaveBeenCalledWith('pasta');
  });

  // Test for processRecipeInfo function
  // Expect: Calls getRecipeInfo with recipeId and returns detailed info
  test('processRecipeInfo calls getRecipeInfo and returns details', async () => {
    const mockInfo = { id: 1, title: 'Mock Recipe Info' };
    RecipeModel.getRecipeInfo.mockResolvedValue(mockInfo);

    const result = await processRecipeInfo(1);
    expect(result).toEqual(mockInfo);
    expect(RecipeModel.getRecipeInfo).toHaveBeenCalledWith(1);
  });

  // Test for getRandomEggRecipes function
  // Expect: Calls getRecipes with "egg" and returns a list of egg recipes
  test('getRandomEggRecipes fetches egg recipes', async () => {
    const mockData = [{ id: 1, title: 'Egg Recipe' }];
    RecipeModel.getRecipes.mockResolvedValue(mockData);

    const result = await getRandomEggRecipes();
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRecipes).toHaveBeenCalledWith('', 3, 'egg');
  });

  // Test for processSaveRecipe function
  // Expect: Calls saveRecipe with the given recipe
  test('processSaveRecipe saves a recipe', () => {
    const recipe = { id: 1, title: 'New Recipe' };
    processSaveRecipe(recipe);
    expect(RecipeModel.saveRecipe).toHaveBeenCalledWith(recipe);
  });

  // Test for processLoadSavedRecipes function
  // Expect: Calls loadSavedRecipes and returns the saved recipes
  test('processLoadSavedRecipes loads saved recipes', () => {
    const mockSavedRecipes = [{ id: 1, title: 'Saved Recipe' }];
    RecipeModel.loadSavedRecipes.mockReturnValue(mockSavedRecipes);

    const result = processLoadSavedRecipes();
    expect(result).toEqual(mockSavedRecipes);
  });

  // Test for processDeleteRecipe function
  // Expect: Calls deleteSavedRecipe with the given recipe
  test('processDeleteRecipe deletes a recipe', () => {
    const recipe = { id: 1, title: 'Recipe to Delete' };
    processDeleteRecipe(recipe);
    expect(RecipeModel.deleteSavedRecipe).toHaveBeenCalledWith(recipe);
  });

  // Test for processRandomRecipes function
  // Expect: Calls getRandomRecipes and returns a list of random recipes
  test('processRandomRecipes fetches random recipes', async () => {
    const mockData = [{ id: 1, title: 'Random Recipe' }];
    RecipeModel.getRandomRecipes.mockResolvedValue(mockData);

    const result = await processRandomRecipes();
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRandomRecipes).toHaveBeenCalled();
  });
});
