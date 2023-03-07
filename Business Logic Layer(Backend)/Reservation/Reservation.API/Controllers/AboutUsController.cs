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
    public class AboutUsController : Controller
    {
        private readonly IAboutUsService _aboutUsService;
        public AboutUsController(IAboutUsService aboutUsService)
        {
            _aboutUsService = aboutUsService;
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateAboutUs([FromBody]AboutUs aboutUs)
        {
            return _aboutUsService.UpdateAboutUs(aboutUs);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<AboutUs>),statusCode: StatusCodes.Status200OK)]
        public List<AboutUs> GetAboutUs()
        {
            return _aboutUsService.GetAboutUs();
        }
    }
}
