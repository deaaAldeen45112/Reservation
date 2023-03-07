using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    
    [Route("api/[controller]")]
   //[Authorize(Roles = "0,1")]
    [ApiController]
    public class MenuItemController : Controller
    {
        private readonly IMenuItemService _menuItemService;
        public MenuItemController(IMenuItemService menuItemService)
        {
            _menuItemService = menuItemService;
        }


    
        [HttpPost]
        [Route("{action}")]
        public string UploadImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                var fullPath = Path.Combine("C:/Users/user/Desktop/deaa/log/src/assets/" + fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                Table image = new Table();
                image.Image_Location = fileName;
                return image.Image_Location;

            }
            catch (Exception e)
            {
                return null;
            }
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteMenuItem(decimal itemId)
        {
           Debug.WriteLine(itemId+"kkk");

            return _menuItemService.DeleteMenuItem(itemId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>),statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetAllMenuItem()
        {
            return _menuItemService.GetAllMenuItem();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemService.GetCheapestMenuItemByBetweenPrice(price1, price2);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool InsertMenuItem([FromBody]MenuItem menuItem)
        {
            return _menuItemService.InsertMenuItem(menuItem);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemById(int  id)
        {
            return _menuItemService.GetCheapestMenuItemById(id);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemService.GetCheapestMenuItemByIdAndName(id,name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2)
        {
            return _menuItemService.GetCheapestMenuItemByIdAndNameAndBetweenPrice(id, name,price1,price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemByName(string name)
        {
            return _menuItemService.GetCheapestMenuItemByName(name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetCheapestMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemService.GetCheapestMenuItemByNameAndBetweenPrice(name, price1, price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemService.GetExpensiveMenuItemByBetweenPrice(price1, price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemById(decimal id)
        {
            return _menuItemService.GetExpensiveMenuItemById(id);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemService.GetExpensiveMenuItemByIdAndName(id, name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2)
        {
            return _menuItemService.GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id, name, price1, price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemByName(string name)
        {
            return _menuItemService.GetExpensiveMenuItemByName(name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetExpensiveMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemService.GetExpensiveMenuItemByNameAndBetweenPrice(name, price1, price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemService.GetMenuItemByBetweenPrice(price1, price2);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemById(decimal id)
        {
            return _menuItemService.GetMenuItemById(id);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemService.GetMenuItemByIdAndName(id, name);
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemByMenuItemId(decimal id)
        {
            return _menuItemService.GetMenuItemByMenuItemId(id);
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemByName(string name)
        {
            return _menuItemService.GetMenuItemByName(name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItem>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItem> GetMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemService.GetMenuItemByNameAndBetweenPrice(name, price1, price2);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool UpdateMenuItem(MenuItem menuItem)
        {
            Debug.WriteLine(menuItem.Menu_Item_Id+"IIIIIIIIII"+menuItem.Menu_Item_Name);
            return _menuItemService.UpdateMenuItem(menuItem);
        }
    }

}
