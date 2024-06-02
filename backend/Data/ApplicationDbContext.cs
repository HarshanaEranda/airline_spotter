using Microsoft.EntityFrameworkCore;
using AirlineSightingAPI.Models;

namespace AirlineSightingAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<AirlineSighting> AirlineSightings { get; set; }
    }
}
