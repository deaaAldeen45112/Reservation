using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IMenuItemReviewRepositroy
    {


        public bool InsertMenuItemReview(MenuItemReview menuItemReview);
        public bool UpdateMenuItemReview(MenuItemReview menuItemReview);
        public bool DeleteMenuItemReview(decimal menuItemReviewId);
        public List<MenuItemReview> GetAllMenuItemReview();
        public List<MenuItemReview> GetMenuItemReviewByMenuItemReviewId(decimal menuItemReviewId);
        public List<MenuItemReview> GetMenuItemReviewByMenuItemId(decimal menuItemId);

    }
}
