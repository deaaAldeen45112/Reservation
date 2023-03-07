using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IMenuItemDiscountService
    {

      public List<MenuItemDiscount> GetMenuItemDiscountByDiscountId (decimal discountId);    
        public bool InsertMenuItemDiscount(MenuItemDiscount menuItemDiscount);
        public bool UpdateMenuItemDiscount(MenuItemDiscount menuItemDiscount);

        public bool DeleteMenuItemDiscount(decimal menuItemId);

        public List<MenuItemDiscount> GetAllMenuItemDiscount();

        public List<MenuItemDiscount> GetMenuItemDiscountByMenuItemId(decimal menuItemId);
    }
}
