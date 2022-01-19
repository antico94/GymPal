using Newtonsoft.Json;

namespace Test.Models.UserModels;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    [JsonIgnore]
    public string Password { get; set; }
}