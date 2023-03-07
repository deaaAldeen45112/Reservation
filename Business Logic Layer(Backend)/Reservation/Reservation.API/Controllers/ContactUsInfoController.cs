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
    public class ContactUsInfoController : Controller
    {
        private readonly IContactUsInfoService _contactUsInfoService;
        public ContactUsInfoController(IContactUsInfoService contactUsInfoService)
        {
            _contactUsInfoService = contactUsInfoService;
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateContactUsInfo([FromBody]ContactUsInfo contactUsInfo)
        {
            return _contactUsInfoService.UpdateContactUsInfo(contactUsInfo);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ContactUsInfo>),statusCode: StatusCodes.Status200OK)]
        public List<ContactUsInfo> GetContactUsInfo()
        {
            return _contactUsInfoService.GetContactUsInfo();
        }
    }
}
