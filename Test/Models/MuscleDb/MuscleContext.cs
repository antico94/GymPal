using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.GymData.Enums;
using Test.Models.Progress;

namespace Test.Models.MuscleDb;

public class MuscleContext : DbContext
{
    public MuscleContext(DbContextOptions<MuscleContext> options) : base(options)
    {
    }
        
    public DbSet<Muscle> Muscles { get; set; }
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<GymTask> Tasks { get; set; }
    public DbSet<Progress.Progress> Progresses { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GymTask>( a =>
        {
            a.Property<int>( "Id" );
            a.HasKey( "Id" );
        } );
    }
}