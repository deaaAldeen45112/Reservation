using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
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
    public class MenuCategoryController : Controller
    {
        private readonly IMenuCategoryService _menuCategoryService;
        public MenuCategoryController(IMenuCategoryService menuCategoryService)
        {
            _menuCategoryService = menuCategoryService;
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteMenuCategory(int categoryId)
        {
            Debug.WriteLine(categoryId);
            return _menuCategoryService.DeleteMenuCategory(categoryId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuCategory>), statusCode: StatusCodes.Status200OK)]
        public List<MenuCategory> GetAllMenuCategory()
        {
            return _menuCategoryService.GetAllMenuCategory();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuCategory>), statusCode: StatusCodes.Status200OK)]
        public List<MenuCategory> GetMenuCategoryById(int categoryId)
        {
            return _menuCategoryService.GetMenuCategoryById(categoryId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuCategory>), statusCode: StatusCodes.Status200OK)]
        public List<MenuCategory> GetMenuCategoryByName(string name)
        {
            return _menuCategoryService.GetMenuCategoryByName(name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuCategory>), statusCode: StatusCodes.Status200OK)]
        public List<MenuCategory> GetMenuCategoryByParentId(int ParentId)
        {
            return _menuCategoryService.GetMenuCategoryByParentId(ParentId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuCategory>), statusCode: StatusCodes.Status200OK)]
        public List<MenuCategory> GetMenuCategoryByParentIdAndName(int ParentId, string name)
        {
            return _menuCategoryService.GetMenuCategoryByParentIdAndName(ParentId, name);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool InsertMenuCategory([FromBody]MenuCategory menuCategory)
        {
            return _menuCategoryService.InsertMenuCategory(menuCategory);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateMenuCategory([FromBody]MenuCategory menuCategory)
        {
            return _menuCategoryService.UpdateMenuCategory(menuCategory);
        }
    }
}
