using System.ComponentModel.DataAnnotations;
using MessagePack;

namespace Test.Models.UserModels;

public class UserProfile
{
    
    public User User { get; set; }
    [System.ComponentModel.DataAnnotations.Key]
    public int UserId { get; set; }
    public DateTime DateJoined { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string? Height { get; set; }
    public string? Weight { get; set; }
    public string? BenchPressRecord { get; set; }
    public string? CardioRecord { get; set; }
}