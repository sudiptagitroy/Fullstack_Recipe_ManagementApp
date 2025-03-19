using Microsoft.EntityFrameworkCore;
using RecipeManagementSystemAPI.Models;
using RecipeManagementSystemAPI.Repositories;

namespace RecipeManagementSystemAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepo _UserRepo;
        public UserService(IUserRepo UserRepo)
        {
            _UserRepo = UserRepo;
        }
        public async Task<User> CreateUser(User User)
        {
            return await _UserRepo.CreateUser(User);
        }
        public async Task<User> Login(User user)
        {
            return await _UserRepo.Login(user);
        }
        public async Task<object> DeleteUser(int id)
        {
            return await _UserRepo.DeleteUser(id);
        }

        public async Task<User> GetUser(int id)
        {
            return await _UserRepo.GetUser(id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _UserRepo.GetUsers();
        }

        public async Task<User> UpdateUser(User User)
        {
            return await _UserRepo.UpdateUser(User);
        }
    }
}
