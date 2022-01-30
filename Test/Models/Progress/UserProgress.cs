using System.ComponentModel.DataAnnotations;
using Test.Models.UserModels;

namespace Test.Models.Progress;

public class UserProgress
{

    public User User { get; set; }
    [Key]
    public int UserId { get; set; }
    public ICollection<Progress> Progresses { get; set; }
}