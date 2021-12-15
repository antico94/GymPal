using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models.GymData;
using Test.Models.MuscleDb;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MuscleController : ControllerBase
    {
        private readonly MuscleContext _context;

        public MuscleController(MuscleContext context)
        {
            _context = context;
        }

        // GET: api/Muscle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Muscle>>> GetMuscles()
        {
            return await _context.Muscles.ToListAsync();
        }

        // GET: api/Muscle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Muscle>> GetMuscle(int id)
        {
            var muscle = await _context.Muscles.FindAsync(id);

            if (muscle == null)
            {
                return NotFound();
            }

            return muscle;
        }

        // PUT: api/Muscle/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMuscle(int id, Muscle muscle)
        {
            if (id != muscle.Id)
            {
                return BadRequest();
            }

            _context.Entry(muscle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MuscleExists(id))
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

        // POST: api/Muscle
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Muscle>> PostMuscle(Muscle muscle)
        {
            _context.Muscles.Add(muscle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMuscle", new { id = muscle.Id }, muscle);
        }

        // DELETE: api/Muscle/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMuscle(int id)
        {
            var muscle = await _context.Muscles.FindAsync(id);
            if (muscle == null)
            {
                return NotFound();
            }

            _context.Muscles.Remove(muscle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MuscleExists(int id)
        {
            return _context.Muscles.Any(e => e.Id == id);
        }
    }
}
