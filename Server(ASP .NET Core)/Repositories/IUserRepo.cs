using RecipeManagementSystemAPI.Models;

namespace RecipeManagementSystemAPI.Repositories
{
    public interface IUserRepo
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<User> Login(User user);
        Task<User> CreateUser(User User);
        Task<User> UpdateUser(User User);
        Task<object> DeleteUser(int id);
    }
}
