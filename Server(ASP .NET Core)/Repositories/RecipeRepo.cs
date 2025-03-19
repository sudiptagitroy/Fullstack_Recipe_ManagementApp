using Microsoft.EntityFrameworkCore;
using RecipeManagementSystemAPI.Data;
using RecipeManagementSystemAPI.Models;

namespace RecipeManagementSystemAPI.Repositories
{
    public class RecipeRepo : IRecipeRepo
    {
        private readonly AppDbContext _context;

        public RecipeRepo(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Recipe> CreateRecipe(Recipe recipe)
        {
            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();
            return recipe;
        }

        public async Task<object> DeleteRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return null;
            }
            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return recipe;
        }

        public async Task<Recipe> GetRecipe(int id)
        {
            return await _context.Recipes.FindAsync(id);
        }
        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await _context.Recipes.Include(o => o.User).ToListAsync();
        }
        public async Task<Recipe> UpdateRecipe(Recipe recipe)
        {
            _context.Entry(recipe).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return recipe;
        }
    }
}
