using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;
using Reservation.Core.Repository;

namespace Reservation.Infra.Service
{
    public class MenuItemService : IMenuItemService
    {
        private readonly IMenuItemRepositroy _menuItemRepositroy;
        public MenuItemService(IMenuItemRepositroy menuItemRepositroy)
        {
            _menuItemRepositroy = menuItemRepositroy;
        }

        public bool DeleteMenuItem(decimal itemId)
        {
            return _menuItemRepositroy.DeleteMenuItem(itemId);
        }

        public List<MenuItem> GetAllMenuItem()
        {
            return _menuItemRepositroy.GetAllMenuItem();
        }

        public List<MenuItem> GetCheapestMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetCheapestMenuItemByBetweenPrice(price1, price2);
        }

        public List<MenuItem> GetCheapestMenuItemById(decimal id)
        {
            return _menuItemRepositroy.GetCheapestMenuItemById(id);
        }

        public List<MenuItem> GetCheapestMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemRepositroy.GetCheapestMenuItemByIdAndName(id, name);
        }

        public List<MenuItem> GetCheapestMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetCheapestMenuItemByIdAndNameAndBetweenPrice(id, name, price1, price2);
        }

        public List<MenuItem> GetCheapestMenuItemByName(string name)
        {
            return _menuItemRepositroy.GetCheapestMenuItemByName(name);
        }

        public List<MenuItem> GetCheapestMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetCheapestMenuItemByNameAndBetweenPrice(name, price1, price2);
        }

        public List<MenuItem> GetExpensiveMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemByBetweenPrice(price1, price2);
        }

        public List<MenuItem> GetExpensiveMenuItemById(decimal id)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemById(id);
        }

        public List<MenuItem> GetExpensiveMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemByIdAndName(id, name);
        }

        public List<MenuItem> GetExpensiveMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id, name, price1, price2);
        }

        public List<MenuItem> GetExpensiveMenuItemByName(string name)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemByName(name);
        }

        public List<MenuItem> GetExpensiveMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetExpensiveMenuItemByNameAndBetweenPrice(name, price1, price2);
        }

        public List<MenuItem> GetMenuItemByBetweenPrice(decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetMenuItemByBetweenPrice(price1, price2);
        }

        public List<MenuItem> GetMenuItemById(decimal id)
        {
            return _menuItemRepositroy.GetMenuItemById(id);
        }

        public List<MenuItem> GetMenuItemByIdAndName(decimal id, string name)
        {
            return _menuItemRepositroy.GetMenuItemByIdAndName(id, name);
        }

        public List<MenuItem> GetMenuItemByMenuItemId(decimal id)
        {
            return _menuItemRepositroy.GetMenuItemByMenuItemId(id);
        }

        public List<MenuItem> GetMenuItemByName(string name)
        {
            return _menuItemRepositroy.GetMenuItemByName(name);
        }

        public List<MenuItem> GetMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2)
        {
            return _menuItemRepositroy.GetMenuItemByNameAndBetweenPrice(name, price1, price2);
        }

        public bool InsertMenuItem(MenuItem menuItem)
        {
            return _menuItemRepositroy.InsertMenuItem(menuItem);
        }

        public bool UpdateMenuItem(MenuItem menuItem)
        {
            return _menuItemRepositroy.UpdateMenuItem(menuItem);
        }
    }
}
