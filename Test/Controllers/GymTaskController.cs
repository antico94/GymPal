using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Tasks;
using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.GymData.Enums;
using Test.Models.MuscleDb;
using Test.Models.WebModels;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymTaskController : ControllerBase
    {
        private readonly MuscleContext _context;

        public GymTaskController(MuscleContext context)
        {
            _context = context;
        }

        // GET: api/GymTask
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GymTask>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }
        
        [HttpGet]
        [Route("generate")]
        public async Task<ActionResult> GenerateData()
        {
            var exercises = _context.Exercises.ToList();
            foreach (var exercise in exercises)
            {
                GymTask gymTask = new GymTask()
                {
                    Name = exercise.Name,
                    Exercise = exercise,
                    TaskType = TaskType.Repetition,
                    IsDone = false,
                    ObjectWeight = 20,
                    Duration = 0,
                    Repetions = 36
                };
                _context.Tasks.Add(gymTask);
                await _context.SaveChangesAsync();
            }

            return Ok();
        }

        // GET: api/GymTask/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GymTask>> GetGymTask(int id)
        {
            var gymTask = await _context.Tasks.FindAsync(id);

            if (gymTask == null)
            {
                return NotFound();
            }

            return gymTask;
        }

        // PUT: api/GymTask/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGymTask(int id, GymTask gymTask)
        {
            if (id != gymTask.Id)
            {
                return BadRequest();
            }

            _context.Entry(gymTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GymTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/GymTask
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GymTask>> PostGymTask(GymTaskWebModel webModel)
        {
            var targetExercise = _context.Exercises.FirstOrDefault(e => e.Id == webModel.ExerciseId);
            if (targetExercise != null)
            {
                GymTask gymTask = new GymTask()
                {
                    Name = targetExercise.Name,
                    Exercise = targetExercise,
                    TaskType = webModel.TaskType,
                    IsDone = false,
                    ObjectWeight = webModel.ObjectWeight,
                    Duration = webModel.Duration,
                    Repetions = webModel.Repetions
                };
                _context.Tasks.Add(gymTask);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest(new
                {
                    message = "smth wrong"
                });
            }
        }

        // DELETE: api/GymTask/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGymTask(int id)
        {
            var gymTask = await _context.Tasks.FindAsync(id);
            if (gymTask == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(gymTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GymTaskExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}