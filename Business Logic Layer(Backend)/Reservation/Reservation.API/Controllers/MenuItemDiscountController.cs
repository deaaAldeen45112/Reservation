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
    public class MenuItemDiscountController : Controller
    {
        private readonly IMenuItemDiscountService _menuItemDiscountService;

        public MenuItemDiscountController(IMenuItemDiscountService menuItemDiscountService)
        {
            _menuItemDiscountService = menuItemDiscountService;
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertMenuItemDiscount([FromBody]MenuItemDiscount menuItemDiscount)
        {
            return _menuItemDiscountService.InsertMenuItemDiscount(menuItemDiscount);
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemDiscount>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemDiscount> GetMenuItemDiscountByDiscountId(decimal discountId)
        {
            return _menuItemDiscountService.GetMenuItemDiscountByDiscountId(discountId);


        }

        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateMenuItemDiscount([FromBody]MenuItemDiscount menuItemDiscount)
        {
            return _menuItemDiscountService.UpdateMenuItemDiscount(menuItemDiscount);
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteMenuItemDiscount(decimal menuItemId)
        {
            return _menuItemDiscountService.DeleteMenuItemDiscount(menuItemId);
        }

       
      

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemDiscount>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemDiscount> GetAllMenuItemDiscount()
        {
            return _menuItemDiscountService.GetAllMenuItemDiscount();
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemDiscount>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemDiscount> GetMenuItemDiscountByMenuItemId(decimal menuItemId)
        {
            return _menuItemDiscountService.GetMenuItemDiscountByMenuItemId(menuItemId);
        }
    }
}
