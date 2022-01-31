using Newtonsoft.Json;
using Test.Models.GymData.Enums;

namespace Test.Models.UserModels;

public class User
{
    public UserProfile Profile { get; set; }
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    [JsonIgnore]
    public string Password { get; set; }
}