using Microsoft.EntityFrameworkCore;
using DataLibrary.Models;

namespace DataLibrary.Data
{

    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        { 
        }

        public DbSet<User> User { get; set; }
    }
}
