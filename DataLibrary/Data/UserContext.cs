using Microsoft.EntityFrameworkCore;
using DataLibrary.Models;

namespace DataLibrary.Data
{

    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        { 
        }

        // User is the database name Entity framework is looking for
        public DbSet<User> User { get; set; }
    }
}
