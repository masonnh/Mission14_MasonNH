using Microsoft.AspNetCore.Mvc;
using Mission14API.Data;

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController (MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(m => m.Edited == true).OrderBy(m => m.Title).ToArray();
        }
    }
}
