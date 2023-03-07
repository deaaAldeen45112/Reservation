using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IMenuItemService
    {
        public bool InsertMenuItem(MenuItem menuItem);
        public bool UpdateMenuItem(MenuItem menuItem);
        public bool DeleteMenuItem(decimal itemId);
        public List<MenuItem> GetAllMenuItem();
        public List<MenuItem> GetMenuItemByMenuItemId(decimal id);

        public List<MenuItem> GetMenuItemByIdAndName(decimal id, string name);
        public List<MenuItem> GetMenuItemById(decimal id);
        public List<MenuItem> GetMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2);
        public List<MenuItem> GetMenuItemByBetweenPrice(decimal price1, decimal price2);
        public List<MenuItem> GetMenuItemByName(string name);
        public List<MenuItem> GetCheapestMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2);
        public List<MenuItem> GetCheapestMenuItemByIdAndName(decimal id, string name);
        public List<MenuItem> GetCheapestMenuItemById(decimal id);
        public List<MenuItem> GetCheapestMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2);
        public List<MenuItem> GetCheapestMenuItemByBetweenPrice(decimal price1, decimal price2);
        public List<MenuItem> GetCheapestMenuItemByName(string name);
        public List<MenuItem> GetExpensiveMenuItemByIdAndNameAndBetweenPrice(decimal id, string name, decimal price1, decimal price2);
        public List<MenuItem> GetExpensiveMenuItemByIdAndName(decimal id, string name);
        public List<MenuItem> GetExpensiveMenuItemById(decimal id);
        public List<MenuItem> GetExpensiveMenuItemByNameAndBetweenPrice(string name, decimal price1, decimal price2);
        public List<MenuItem> GetExpensiveMenuItemByBetweenPrice(decimal price1, decimal price2);
        public List<MenuItem> GetExpensiveMenuItemByName(string name);

    }
}
