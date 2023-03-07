using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Reservation.Core.DTO;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JWTController : Controller
    {
        private readonly IJWTService _jwtService;
        public JWTController(IJWTService jwtService)
        {
            _jwtService = jwtService;
        }
        [HttpGet]
        public RegisterDTO Auth(string email,string pass)
        {
            return _jwtService.Auth(email,pass);
        }

        [HttpPost]
        public IActionResult Authoin(string email, string pass)
        {
           
            var token = _jwtService.Authion(email,pass);
            Token token1 = new Token();
            token1.token = token;
            if (token == null)
            {
                return Unauthorized();
            }
            else
            {
               
                return Ok(token1);
           }
        }
       
    }
}
