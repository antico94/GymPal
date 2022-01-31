using System.ComponentModel.DataAnnotations;
using MessagePack;
using Test.Models.Enums;
using Test.Models.GymData.Enums;

namespace Test.Models.UserModels;

public class UserProfile
{
    [System.ComponentModel.DataAnnotations.Key]
    public int UserId { get; set; }
    public DateTime DateJoined { get; set; }
    public string Name { get; set; }
    public Gender Gender { get; set; }
    public int Age { get; set; }
    public double BMI { get; set; }
    public double BodyFat { get; set; }
    public BodyFatIndex BodyFatIndex { get; set; }
    public BmiChart BMIIndex { get; set; }
    public string Description { get; set; }
    public int Height { get; set; }
    public int Weight { get; set; }
}