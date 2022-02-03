namespace Test.Models.WebModels;

public class ExerciseWebModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<int> MusclesIdList { get; set; }
}