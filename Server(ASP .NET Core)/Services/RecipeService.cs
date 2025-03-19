using RecipeManagementSystemAPI.Models;
using RecipeManagementSystemAPI.Repositories;

namespace RecipeManagementSystemAPI.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly IRecipeRepo _recipeRepo;
        public RecipeService(IRecipeRepo recipeRepo)
        {
            _recipeRepo = recipeRepo;
        }
        public async Task<Recipe> CreateRecipe(Recipe recipe)
        {
            return await _recipeRepo.CreateRecipe(recipe);
        }

        public async Task<object> DeleteRecipe(int id)
        {
            return await _recipeRepo.DeleteRecipe(id);
        }

        public async Task<Recipe> GetRecipe(int id)
        {
            return await _recipeRepo.GetRecipe(id);
        }

        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await _recipeRepo.GetRecipes();
        }

        public async Task<Recipe> UpdateRecipe(Recipe recipe)
        {
            return await _recipeRepo.UpdateRecipe(recipe);
        }
    }
}
