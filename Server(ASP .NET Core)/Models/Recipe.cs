using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeManagementSystemAPI.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Ingredients { get; set; }

        [Required]
        public string Instructions { get; set; }

        public string Category { get; set; }

        public string ImageUrl { get; set; }

        public int? UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}
