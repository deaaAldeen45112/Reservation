using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : Controller
    {
        private readonly ICartItemService _cartItemService;
        public CartItemController(ICartItemService cartItemService)
        {
            _cartItemService = cartItemService;
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool AddToCartItem([FromBody] CartItem cartItem)
        {

      Debug.WriteLine(cartItem.Cart_Item_Price);
            return _cartItemService.AddToCartItem(cartItem);
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteFromCartItemByCartItemId(decimal cartItemId)
        {
            return _cartItemService.DeleteFromCartItemByCartItemId(cartItemId);
        }


        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteAllCartItemByCartId(decimal cartId)
        {
            return _cartItemService.DeleteAllCartItemByCartId(cartId);
        }




        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<CartItem>), statusCode: StatusCodes.Status200OK)]
        public List<CartItem> GetCartItems([FromBody] CartItem cartItem)
        {
            return _cartItemService.GetCartItems(cartItem);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<CartMenuItemDto>), statusCode: StatusCodes.Status200OK)]
        public List<CartMenuItemDto> GetCartItemByCartId(decimal cartId)
        {
            return _cartItemService.GetCartItemByCartId(cartId);
        }



    }
}
