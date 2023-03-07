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
    public class ContactUsController : Controller
    {
        private readonly IContactUsService _contactUsService;
        public ContactUsController(IContactUsService contactUsService)
        {
            _contactUsService = contactUsService;
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ContactUs>), statusCode: StatusCodes.Status200OK)]
        public List<ContactUs> GetAllContactUs()
        {
            return _contactUsService.GetAllContactUs();
        }
        [HttpGet]
        [Route("{action}/{subject}")]
        [ProducesResponseType(typeof(List<ContactUs>), statusCode: StatusCodes.Status200OK)]
        public List<ContactUs> GetContactUsBySubject(string subject)
        {
            return _contactUsService.GetContactUsBySubject(subject);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool AddContactUs([FromBody]ContactUs contactUs)
        {
            return _contactUsService.AddContactUs(contactUs);
        }
    }
}
