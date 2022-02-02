namespace Test.Models.GymData;

public class Workout
{
    public int WorkoutId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ICollection<GymTask> GymTasks { get; set; }
}