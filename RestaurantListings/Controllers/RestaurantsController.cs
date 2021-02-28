using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using RestaurantListings.Data;
using RestaurantListings.Data.Entities;

namespace RestaurantListings.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class RestaurantsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public string UserId => User.FindFirstValue(ClaimTypes.NameIdentifier);

        public RestaurantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns all restaurants.
        /// </summary>
        [HttpGet]
        public IEnumerable<Restaurant> Get()
        {
            return _context.Restaurants.ToList();
        }
    }
}
