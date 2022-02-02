namespace Test.Models.WebModels;

public class WorkoutWebModel
{
    public string Name { get; set; }
    public string Description { get; set; }
    public List<int> GymTasksIds { get; set; }
}