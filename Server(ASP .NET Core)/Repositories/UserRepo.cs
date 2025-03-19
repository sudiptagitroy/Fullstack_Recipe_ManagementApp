using Microsoft.EntityFrameworkCore;
using RecipeManagementSystemAPI.Data;
using RecipeManagementSystemAPI.Models;

namespace RecipeManagementSystemAPI.Repositories
{
    public class UserRepo : IUserRepo
    {
        private readonly AppDbContext _context;

        public UserRepo(AppDbContext context)
        {
            _context = context;
        }
        public async Task<User> CreateUser(User User)
        {
            _context.Users.Add(User);
            await _context.SaveChangesAsync();
            return User;
        }

        public async Task<object> DeleteUser(int id)
        {
            var User = await _context.Users.FindAsync(id);
            if (User == null)
            {
                return null;
            }
            _context.Users.Remove(User);
            await _context.SaveChangesAsync();

            return User;
        }

        public async Task<User> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> Login(User user)
        {
            User userResult = null;
            var users = await _context.Users.Where(u => u.Email == user.Email && u.Password == user.Password).ToListAsync();
            if (users != null)
            {
                if (users.Count > 0)
                {
                    userResult = users.FirstOrDefault();
                    userResult.Password = "";
                }
            }
            return userResult;
        }

        public async Task<User> UpdateUser(User User)
        {
            _context.Entry(User).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return User;
        }
    }
}
