using System.ComponentModel.DataAnnotations.Schema;

namespace Test.Models.GymData;

public class Workout
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ICollection<GymTask> GymTasks { get; set; }
}