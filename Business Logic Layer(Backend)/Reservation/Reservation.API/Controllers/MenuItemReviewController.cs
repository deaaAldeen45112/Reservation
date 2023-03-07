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
    public class MenuItemReviewController : Controller
    {
        private readonly IMenuItemReviewService _menuItemReviewService;

        public MenuItemReviewController(IMenuItemReviewService menuItemReviewService)
        {
            _menuItemReviewService = menuItemReviewService;
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteMenuItemReview(decimal menuItemReviewId)
        {
            return _menuItemReviewService.DeleteMenuItemReview(menuItemReviewId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemReview>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemReview> GetAllMenuItemReview()
        {
            return _menuItemReviewService.GetAllMenuItemReview();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemReview>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemReview> GetMenuItemReviewByMenuItemId(decimal menuItemId)
        {
            return _menuItemReviewService.GetMenuItemReviewByMenuItemId(menuItemId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<MenuItemReview>), statusCode: StatusCodes.Status200OK)]
        public List<MenuItemReview> GetMenuItemReviewByMenuItemReviewId(decimal menuItemReviewId)
        {
            return _menuItemReviewService.GetMenuItemReviewByMenuItemReviewId(menuItemReviewId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertMenuItemReview([FromBody]MenuItemReview menuItemReview)
        {
            return _menuItemReviewService.InsertMenuItemReview(menuItemReview);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateMenuItemReview([FromBody]MenuItemReview menuItemReview)
        {
            return _menuItemReviewService.UpdateMenuItemReview(menuItemReview);
        }
    }
}
