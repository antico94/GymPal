using System.ComponentModel.DataAnnotations.Schema;
using MessagePack;
using Test.Models.GymData.Enums;

namespace Test.Models.WebModels;

public class GymTaskWebModel
{
    public TaskType TaskType { get; set; }
    public int ExerciseId { get; set; }
    public int ObjectWeight { get; set; }
    public int Repetions { get; set; }
    public int Duration { get; set; }
}