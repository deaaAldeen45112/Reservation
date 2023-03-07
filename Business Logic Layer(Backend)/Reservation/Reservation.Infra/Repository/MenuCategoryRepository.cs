using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class MenuCategoryRepository: IMenuCategoryRepositroy
    {
        private readonly IDbContext _dbContext;
        public MenuCategoryRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteMenuCategory(int categoryId)
        {
            var p = new DynamicParameters();
            p.Add("category_id", categoryId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("MENU_CATEGORY_PACKAGE.DeleteMenuCategory", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<MenuCategory> GetAllMenuCategory()
        {
            IEnumerable<MenuCategory> result = _dbContext.Connection.Query<MenuCategory>("MENU_CATEGORY_PACKAGE.GetAllMenuCategory", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<MenuCategory> GetMenuCategoryById(int categoryId)
        {
            var p = new DynamicParameters();
            p.Add("category_id", categoryId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuCategory> result = _dbContext.Connection.Query<MenuCategory>("MENU_CATEGORY_PACKAGE.GetMenuCategoryById",p, commandType: CommandType.StoredProcedure);
            return result.AsList();

        }

        public List<MenuCategory> GetMenuCategoryByName(string name)
        {
            var p = new DynamicParameters();
            p.Add("name", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuCategory> result = _dbContext.Connection.Query<MenuCategory>("MENU_CATEGORY_PACKAGE.GetMenuCategoryByName", p,commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<MenuCategory> GetMenuCategoryByParentId(int ParentId)
        {
            var p = new DynamicParameters();
            p.Add("ParentId", ParentId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuCategory> result = _dbContext.Connection.Query<MenuCategory>("MENU_CATEGORY_PACKAGE.GetMenuCategoryByParentId", p,commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<MenuCategory> GetMenuCategoryByParentIdAndName(int ParentId, string name)
        {
            var p = new DynamicParameters();
            p.Add("ParentId", ParentId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuCategory> result = _dbContext.Connection.Query<MenuCategory>("MENU_CATEGORY_PACKAGE.GetMenuCategoryByParentIdAndName", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertMenuCategory(MenuCategory menuCategory)
        {
            var p = new DynamicParameters();
            p.Add("menu_category_parent_id", menuCategory.Menu_Category_Parent_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("menu_category_name", menuCategory.Menu_Category_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("menu_category_content", menuCategory.Menu_Category_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("menu_category_createdate", menuCategory.Menu_Category_Createdate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_CATEGORY_PACKAGE.InsertMenuCategory",p,commandType:CommandType.StoredProcedure);
            return true;

        }

        public bool UpdateMenuCategory(MenuCategory menuCategory)
        {
            var p = new DynamicParameters();
            p.Add("category_id",menuCategory.Menu_Category_Id , dbType:DbType.Int32,direction:ParameterDirection.Input);
            p.Add("category_parent_id", menuCategory.Menu_Category_Parent_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("category_name", menuCategory.Menu_Category_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("category_content", menuCategory.Menu_Category_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("category_createdate", menuCategory.Menu_Category_Createdate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_CATEGORY_PACKAGE.UpdateMenuCategory", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
