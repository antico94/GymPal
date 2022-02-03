using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.MuscleDb;
using Test.Models.WebModels;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseController : ControllerBase
    {
        private readonly MuscleContext _context;

        public ExerciseController(MuscleContext context)
        {
            _context = context;
        }

        // GET: api/Exercise
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseReturnModel>>> GetExercises()
        {
            var data = await _context.Exercises.Include(e => e.MusclesTrained).ToListAsync();
            List<ExerciseReturnModel> returnModels = new List<ExerciseReturnModel>();
            foreach (var exercise in data)
            {
                returnModels.Add(new ExerciseReturnModel()
                {
                    Id = exercise.Id,
                    Name = exercise.Name,
                    MusclesList = exercise.MusclesTrained.Select(t=>t.Name).ToList()
                });
            }
            foreach (var s in returnModels)
            {
                foreach (var s1 in s.MusclesList)
                {
                    Console.WriteLine(s1);
                }
            }
            return returnModels;
        }

        // GET: api/Exercise/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Exercise>> GetExercise(int id)
        {
            var exercise = await _context.Exercises.FindAsync(id);

            if (exercise == null)
            {
                return NotFound();
            }

            return exercise;
        }

        // PUT: api/Exercise/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExercise(int id, ExerciseWebModel model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            var musclesTrained = GetMusclesByListOfIds(model.MusclesIdList);
            var result = _context.Exercises.Include(t => t.MusclesTrained).SingleOrDefault(b => b.Id == model.Id);

            if (result != null)
            {
                result.Name = model.Name;
                result.MusclesTrained = musclesTrained;
            }


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseExists(id))
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

        // POST: api/Exercise
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Exercise>> PostExercise(ExerciseWebModel model)
        {
            var musclesTrained = GetMusclesByListOfIds(model.MusclesIdList);
            var exercise = new Exercise()
            {
                Name = model.Name,
                MusclesTrained = musclesTrained
            };
            _context.Exercises.Add(exercise);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExercise", new {id = exercise.Id}, exercise);
        }

        // DELETE: api/Exercise/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercise(int id)
        {
            var exercise = await _context.Exercises.FindAsync(id);
            if (exercise == null)
            {
                return NotFound();
            }

            _context.Exercises.Remove(exercise);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseExists(int id)
        {
            return _context.Exercises.Any(e => e.Id == id);
        }

        private ICollection<Muscle> GetMusclesByListOfIds(List<int> musclesId)
        {
            var muscles = new List<Muscle>();
            foreach (var id in musclesId)
            {
                if (_context.Muscles.Any(m => m.Id == id))
                {
                    muscles.Add(_context.Muscles.First(m => m.Id == id));
                }
                else
                {
                    throw new Exception($"The muscle with id {id} is not in database");
                }
            }

            return muscles;
        }

        [Route("GetExercisesFromMusclesSelected")]
        [HttpPost]
        public ActionResult<ICollection<Exercise>> GetExercisesFromMusclesSelected(List<int> musclesId)
        {
            var exercises = new List<Exercise>();
            var muscles = GetMusclesByListOfIds(musclesId);
            foreach (var muscle in muscles)
            {
                var temp = (_context.Exercises.Where(m=>m.MusclesTrained.Select(z=>z.Id).Contains(muscle.Id))).ToList();
                foreach (var exercise in temp)
                {
                    exercises.Add(exercise);
                }
            }
            
            
            return Ok(exercises);
        }
    }
}