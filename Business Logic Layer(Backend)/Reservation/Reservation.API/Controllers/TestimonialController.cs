using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestimonialController : Controller
    {
        private readonly ITestimonialService _testimonialService;
        public TestimonialController(ITestimonialService testimonialService)
        {
            _testimonialService = testimonialService;
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Testimonial>), statusCode: StatusCodes.Status200OK)]
        public List<Testimonial> GetTestimonials()
        {
            return _testimonialService.GetTestimonials();
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertTestimonial([FromBody]Testimonial testimonial)
        {
            return _testimonialService.InsertTestimonial(testimonial);
        }
    }
}
