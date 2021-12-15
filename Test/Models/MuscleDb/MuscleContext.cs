using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.GymData.Enums;

namespace Test.Models.MuscleDb;

public class MuscleContext : DbContext
{
    public MuscleContext(DbContextOptions<MuscleContext> options) : base(options)
    {
    }
        
    public DbSet<Muscle> Muscles { get; set; }
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<GymTask> Tasks { get; set; }
}