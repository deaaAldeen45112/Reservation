using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FooterController : Controller
    {
        private readonly IFooterService _footerService;
        public FooterController(IFooterService footerService)
        {
            _footerService = footerService;
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateFooter([FromBody]Footer footer)
        {
            return _footerService.UpdateFooter(footer);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Footer>),statusCode: StatusCodes.Status200OK)]
        public List<Footer> GetFooter()
        {
            return _footerService.GetFooter();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Footer>), statusCode: StatusCodes.Status200OK)]
        public List<FooterDTO> GetFooterHeader()
        {
            return _footerService.GetFooterHeader();
        }
    }
}
