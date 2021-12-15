using System.ComponentModel.DataAnnotations.Schema;

namespace Test.Models.GymData;

public class Exercise
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Muscle> MusclesTrained { get; set; }
}