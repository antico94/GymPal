using System.ComponentModel.DataAnnotations.Schema;

namespace Test.Models.GymData;

public class ExerciseWebModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<int> MusclesIdList { get; set; }
}