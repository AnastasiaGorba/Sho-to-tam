using Microsoft.EntityFrameworkCore;

namespace GurNetQr.Models
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
