using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Test.Models.GymData.Enums;

namespace Test.Models.GymData;

public class GymTask
{
    //Fields
    private int _repetitions;
    private int _duration;
    
    //Props
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public TaskType TaskType { get; set; }
    public Exercise Exercise { get; set; }
    public int ObjectWeight { get; set; }
    public int Repetions
    {
        get => _repetitions; // get method
        set
        {
            _repetitions = value;
            if (this.TaskType==TaskType.Duration)
            {
                _repetitions = 0;
            }
        }  // set method
    }
    public int Duration 
    {
        get => _duration; // get method
        set
        {
            _duration = value;
            if (this.TaskType==TaskType.Repetition)
            {
                _duration = 0;
            }
        }  // set method
    }

    public bool IsDone { get; set; }
    public ICollection<Workout> UsedInWorkouts { get; set; }
}