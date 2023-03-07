using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class MenuCategoryService : IMenuCategoryService
    {
        private readonly IMenuCategoryRepositroy _menuCategoryRepositroy;
        public MenuCategoryService(IMenuCategoryRepositroy menuCategoryRepositroy)
        {
            _menuCategoryRepositroy = menuCategoryRepositroy;
        }

        public bool DeleteMenuCategory(int categoryId)
        {
            return _menuCategoryRepositroy.DeleteMenuCategory(categoryId);
        }

        public List<MenuCategory> GetAllMenuCategory()
        {
            return _menuCategoryRepositroy.GetAllMenuCategory();
        }

        public List<MenuCategory> GetMenuCategoryById(int categoryId)
        {
            return _menuCategoryRepositroy.GetMenuCategoryById(categoryId);
        }

        public List<MenuCategory> GetMenuCategoryByName(string name)
        {
            return _menuCategoryRepositroy.GetMenuCategoryByName(name);
        }

        public List<MenuCategory> GetMenuCategoryByParentId(int ParentId)
        {
            return _menuCategoryRepositroy.GetMenuCategoryByParentId(ParentId);
        }

        public List<MenuCategory> GetMenuCategoryByParentIdAndName(int ParentId, string name)
        {
            return _menuCategoryRepositroy.GetMenuCategoryByParentIdAndName(ParentId, name);
        }

        public bool InsertMenuCategory(MenuCategory menuCategory)
        {
            return _menuCategoryRepositroy.InsertMenuCategory(menuCategory);
        }

        public bool UpdateMenuCategory(MenuCategory menuCategory)
        {
            return _menuCategoryRepositroy.UpdateMenuCategory(menuCategory);
        }
    }
}
