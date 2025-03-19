using Microsoft.EntityFrameworkCore;
using RecipeManagementSystemAPI.Models;

namespace RecipeManagementSystemAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
