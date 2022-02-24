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
    public class WorkoutController : ControllerBase
    {
        private readonly MuscleContext _context;

        public WorkoutController(MuscleContext context)
        {
            _context = context;
        }

        // GET: api/Workout
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workout>>> GetWorkouts()
        {
            return await _context.Workouts.Include(m=>m.GymTasks).ToListAsync();
        }

        // GET: api/Workout/5
        [HttpGet("{id}")]
        public ActionResult<Workout> GetWorkout(int id)
        {
            var workout = _context.Workouts.Include(z => z.GymTasks).FirstOrDefault(w => w.WorkoutId == id);

            if (workout == null)
            {
                return NotFound();
            }

            return workout;
        }

        // PUT: api/Workout/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkout(int id, Workout workout)
        {
            if (id != workout.WorkoutId)
            {
                return BadRequest();
            }

            _context.Entry(workout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkoutExists(id))
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

        // POST: api/Workout
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Workout>> PostWorkout(WorkoutWebModel webModel)
        {
            Workout workout = new Workout()
            {
                Name = webModel.Name,
                Description = webModel.Description,
                GymTasks = GetGymTasksById(webModel.GymTasksIds)
            };

            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkout", new {id = workout.WorkoutId}, workout);
        }

        // DELETE: api/Workout/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout(int id)
        {
            var workout = await _context.Workouts.FindAsync(id);
            if (workout == null)
            {
                return NotFound();
            }

            _context.Workouts.Remove(workout);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkoutExists(int id)
        {
            return _context.Workouts.Any(e => e.WorkoutId == id);
        }

        private ICollection<GymTask> GetGymTasksById(List<int> list)
        {
            ICollection<GymTask> gymTasks = new List<GymTask>();
            var tasks = _context.Tasks;
            foreach (int id in list)
            {
                GymTask temp = tasks.FirstOrDefault(m => m.Id == id);
                gymTasks.Add(temp);
            }

            return gymTasks;
        }


        // GET: api/Workout
        [HttpGet]
        [Route("/test")]
        // public async Task<ActionResult<IEnumerable<Workout>>> Test()
        public ActionResult<ICollection<GymTask>> Test()
        {
            // return await _context.Workouts.Include(m=>m.GymTasks).ToListAsync();
            var idList = new List<int>();
            for (int i = 5; i <10; i++)
            {
                idList.Add(i);
            }

            var data = GetGymTasksById(idList).ToList();
            return data;
        }
    }
}