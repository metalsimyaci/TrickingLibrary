using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TrickingLibrary.Api.Models;

namespace TrickingLibrary.Api.Controllers
{
    [ApiController]
    [Route("api/tricks")]
    public class Tricks:ControllerBase
    {
        private readonly TrickingStore _store;

        public Tricks(TrickingStore store)
        {
            _store = store;
        }

        [HttpGet]
        public IActionResult All() => Ok(_store.All);

        [HttpGet("{id}")]
        public IActionResult Get(int id) => Ok(_store.All.FirstOrDefault(x => x.Id.Equals(id)));
        
        [HttpPost]
        public IActionResult Create([FromBody] Trick trick)
        {
            _store.Add(trick);
            return Ok();
        }
        
        [HttpPut]
        public IActionResult Update([FromBody] Trick trick)
        {
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public IActionResult Create(int id)
        {
            return Ok();
        }
    }
}