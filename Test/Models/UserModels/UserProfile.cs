using System.ComponentModel.DataAnnotations;
using MessagePack;

namespace Test.Models.UserModels;

public class UserProfile
{
    
    public int UserId { get; set; }
    public DateTime DateJoined { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string? Height { get; set; }
    public int? Weight { get; set; }
    public int? BenchPressRecord { get; set; }
    public int? CardioRecord { get; set; }
}