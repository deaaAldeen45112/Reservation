using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class MenuItemDiscountService : IMenuItemDiscountService
    {
        private readonly IMenuItemDiscount _menuItemDiscountRepositroy;
        public MenuItemDiscountService(IMenuItemDiscount menuItemDiscountRepositroy)
        {
            _menuItemDiscountRepositroy = menuItemDiscountRepositroy;
        }
        public bool DeleteMenuItemDiscount(decimal menuItemId)
        {
            return _menuItemDiscountRepositroy.DeleteMenuItemDiscount(menuItemId);
        }

        public List<MenuItemDiscount> GetAllMenuItemDiscount()
        {
            return _menuItemDiscountRepositroy.GetAllMenuItemDiscount();
        }

        public List<MenuItemDiscount> GetMenuItemDiscountByDiscountId(decimal discountId)
        {
            return _menuItemDiscountRepositroy.GetMenuItemDiscountByDiscountId(discountId);
        }

        public List<MenuItemDiscount> GetMenuItemDiscountByMenuItemId(decimal menuItemId)
        {
            return _menuItemDiscountRepositroy.GetMenuItemDiscountByMenuItemId(menuItemId);
        }

        public bool InsertMenuItemDiscount(MenuItemDiscount menuItemDiscount)
        {
            return _menuItemDiscountRepositroy.InsertMenuItemDiscount(menuItemDiscount);
        }

        public bool UpdateMenuItemDiscount(MenuItemDiscount menuItemDiscount)
        {
            return _menuItemDiscountRepositroy.UpdateMenuItemDiscount(menuItemDiscount);
        }
    }
}
