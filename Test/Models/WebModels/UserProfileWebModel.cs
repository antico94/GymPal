using Test.Models.GymData.Enums;
using Test.Models.UserModels;

namespace Test.Models.WebModels;

public class UserProfileWebModel
{
    [System.ComponentModel.DataAnnotations.Key]
    public int UserId { get; set; }
    public string Name { get; set; }
    public Gender Gender { get; set; }
    public int Age { get; set; }
    public string Description { get; set; }
    public int Height { get; set; }
    public int Weight { get; set; }
}