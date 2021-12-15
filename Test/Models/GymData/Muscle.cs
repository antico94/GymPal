using System.ComponentModel.DataAnnotations.Schema;
using Test.Models.GymData.Enums;

namespace Test.Models.GymData;

public class Muscle
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public Category Category { get; set; }
}