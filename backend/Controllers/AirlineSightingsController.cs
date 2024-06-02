using Microsoft.AspNetCore.Mvc;
using AirlineSightingAPI.Data;
using AirlineSightingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace AirlineSightingAPI.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class AirlineSightingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AirlineSightingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AirlineSighting>>> GetAirlineSightings()
        { 
           return await _context.AirlineSightings.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AirlineSighting>> GetAirlineSighting(int id)
        {   
            var sighting = await _context.AirlineSightings.FindAsync(id);

            if (sighting == null)
            {
                return NotFound();
            }

            return sighting;
        }

        [HttpPost("create")]
        public async Task<ActionResult<AirlineSighting>> PostAirlineSighting(AirlineSighting sighting)
        {
            _context.AirlineSightings.Add(sighting);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAirlineSighting), new { id = sighting.Id }, sighting);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAirlineSighting(int id, AirlineSighting sighting)
        {
            if (id != sighting.Id)
            {
                return BadRequest();
            }

            _context.Entry(sighting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirlineSightingExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAirlineSighting(int id)
        {
            var sighting = await _context.AirlineSightings.FindAsync(id);
            if (sighting == null)
            {
                return NotFound();
            }

            _context.AirlineSightings.Remove(sighting);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AirlineSightingExists(int id)
        {
            return _context.AirlineSightings.Any(e => e.Id == id);
        }
    }
}
