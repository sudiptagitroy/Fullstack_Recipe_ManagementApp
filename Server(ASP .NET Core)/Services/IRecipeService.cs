using RecipeManagementSystemAPI.Models;

namespace RecipeManagementSystemAPI.Services
{
    public interface IRecipeService
    {
        Task<IEnumerable<Recipe>> GetRecipes();
        Task<Recipe> GetRecipe(int id);
        Task<Recipe> CreateRecipe(Recipe recipe);
        Task<Recipe> UpdateRecipe(Recipe recipe);
        Task<object> DeleteRecipe(int id);
    }
}
