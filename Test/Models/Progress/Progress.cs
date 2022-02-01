using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Test.Models.GymData;

namespace Test.Models.Progress;

public class Progress
{
    [Key]
    public int ProgressId { get; set; }
    public DateTime Day { get; set; }
    public ICollection<GymTask> Tasks { get; set; }
}