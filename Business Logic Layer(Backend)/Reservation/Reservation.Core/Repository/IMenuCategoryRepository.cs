using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IMenuCategoryRepositroy
    {
        public bool InsertMenuCategory(MenuCategory menuCategory);
        public bool UpdateMenuCategory(MenuCategory menuCategory);
        public bool DeleteMenuCategory(int categoryId);
        public List<MenuCategory> GetAllMenuCategory();
        public List<MenuCategory> GetMenuCategoryById(int categoryId);
        public List<MenuCategory> GetMenuCategoryByName(string name);
        public List<MenuCategory> GetMenuCategoryByParentId(int ParentId);
        public List<MenuCategory> GetMenuCategoryByParentIdAndName(int ParentId, string name);

    }
}
