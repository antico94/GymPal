using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.GymData.Enums;
using Test.Models.UserModels;

namespace Test.Models.MuscleDb;

public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    {
    }
        
    public DbSet<User> Users { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
            entity.HasIndex(e => e.Email).IsUnique()
        );
    }
}