using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Cart>), statusCode: StatusCodes.Status200OK)]

        public List<Cart> GetCartByRegisterId(decimal regId) { 
        
        return _cartService.GetCartByRegisterId(regId);
        }

    }
}
