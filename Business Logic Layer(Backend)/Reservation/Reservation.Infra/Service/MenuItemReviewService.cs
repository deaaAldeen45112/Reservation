using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

using Reservation.Core.Repository;
namespace Reservation.Infra.Service
{
    public class MenuItemReviewService : IMenuItemReviewService
    {
        private readonly IMenuItemReviewRepositroy _menuItemReviewRepositroy;
        public MenuItemReviewService(IMenuItemReviewRepositroy menuItemReviewRepositroy)
        {
            _menuItemReviewRepositroy = menuItemReviewRepositroy;
        }

        public bool DeleteMenuItemReview(decimal menuItemReviewId)
        {
            return _menuItemReviewRepositroy.DeleteMenuItemReview(menuItemReviewId);
        }

        public List<MenuItemReview> GetAllMenuItemReview()
        {
            return _menuItemReviewRepositroy.GetAllMenuItemReview();
        }

        public List<MenuItemReview> GetMenuItemReviewByMenuItemId(decimal menuItemId)
        {
            return _menuItemReviewRepositroy.GetMenuItemReviewByMenuItemId(menuItemId);
        }

        public List<MenuItemReview> GetMenuItemReviewByMenuItemReviewId(decimal menuItemReviewId)
        {
            return _menuItemReviewRepositroy.GetMenuItemReviewByMenuItemReviewId(menuItemReviewId);
        }

        public bool InsertMenuItemReview(MenuItemReview menuItemReview)
        {
            return _menuItemReviewRepositroy.InsertMenuItemReview(menuItemReview);
        }

        public bool UpdateMenuItemReview(MenuItemReview menuItemReview)
        {
            return _menuItemReviewRepositroy.UpdateMenuItemReview(menuItemReview);
        }
    }
}
