using Microsoft.EntityFrameworkCore;
using DataLibrary.Models;

namespace DataLibrary.Data
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> options) : base(options)
        {
        }
    
        public DbSet<Projects> Projects { get; set; }
    }

}
