using System.ComponentModel.DataAnnotations;
using MessagePack;
using Test.Models.GymData.Enums;

namespace Test.Models.UserModels;

public class UserProfile
{
    private float _bmi;
    
    public User User { get; set; }
    [System.ComponentModel.DataAnnotations.Key]
    public int UserId { get; set; }
    public DateTime DateJoined { get; set; }
    public string Name { get; set; }
    public Gender Gender { get; set; }
    public int Age { get; set; }
    public float BMI
    {
        get => _bmi; // get method
        set
        {
            _bmi = value;
            _bmi = (Weight / Height / Height) * 10000;
        }
        // set method
    }

    public string Description { get; set; }
    public int Height { get; set; }
    public int Weight { get; set; }
    // public string BenchPressRecord { get; set; }
    // public string CardioRecord { get; set; }
    // public bool HasCompletedHsa { get; set; }
    // public bool HasCompletedProfile { get; set; }
    // public bool HasOver1000Cardio { get; set; }
    // public bool HasNotExceededRecommenderWeight { get; set; }
    // public bool HasProfilePicture { get; set; }
    // public bool IsTop10 { get; set; }

    private float CalculateBMI()
    {
        return (Weight / Height / Height) * 10000;
    }
}