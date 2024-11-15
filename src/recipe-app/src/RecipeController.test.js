/*
 * Tests for RecipeController
 * 
 * - Feature: Recipe Processing Logic
 *   - Validates that `processRecipes` calls `getRecipes` with the correct query parameter.
 *   - Checks if `processRecipes` returns correctly processed recipe data.
 *   - Ensures error handling by verifying `processRecipes` throws an appropriate error when the API call fails.
 * 
 * - Console Suppression:
 *   - Suppresses `console.error` output during tests to maintain clean test logs.
 */


import { processRecipes } from './RecipeController';
import * as RecipeModel from './RecipeModel';

jest.mock('./RecipeModel', () => ({
  getRecipes: jest.fn(),
}));

describe('processRecipes', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});  // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore();  // Restore original console.error after each test
  });

  it('should fetch recipes based on query', async () => {
    const mockData = [{ id: 1, title: 'Mock Recipe', image: 'mock-image.jpg' }];
    RecipeModel.getRecipes.mockResolvedValue(mockData);

    const result = await processRecipes('pasta');
    expect(result).toEqual(mockData);
    expect(RecipeModel.getRecipes).toHaveBeenCalledWith('pasta');
  });

  it('should throw an error if API call fails', async () => {
    RecipeModel.getRecipes.mockRejectedValue(new Error('API Error'));

    await expect(processRecipes('pasta')).rejects.toThrow('Error processing recipes');
  });
});
