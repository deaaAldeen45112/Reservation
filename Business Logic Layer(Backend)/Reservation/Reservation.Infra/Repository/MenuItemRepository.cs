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
    public class MenuItemRepository : IMenuItemRepositroy
    {
        private readonly IDbContext _dbContext;

        public MenuItemRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteMenuItem(decimal p_itemId)
        {
            var p = new DynamicParameters();
            p.Add("item_id", p_itemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_PACKAGE.DeleteMenuItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<MenuItem> GetAllMenuItem()
        {
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetAllMenuItem", commandType:CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemByBetweenPrice(decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("price1",p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemByBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemById(decimal p_id)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemById", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemByIdAndName(decimal p_id, string p_name)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemByIdAndName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemByIdAndNameAndBetweenPrice(decimal p_id, string p_name, decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemByIdAndNameAndBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemByName(string p_name)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemByName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetCheapestMenuItemByNameAndBetweenPrice(string p_name, decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetCheapestMenuItemByNameAndBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemByBetweenPrice(decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemByBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemById(decimal p_id)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemById", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemByIdAndName(decimal p_id, string p_name)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemByIdAndName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemByIdAndNameAndBetweenPrice(decimal p_id, string p_name, decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemByIdAndNameAndBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemByName(string p_name)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemByName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetExpensiveMenuItemByNameAndBetweenPrice(string p_name, decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetExpensiveMenuItemByNameAndBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemByBetweenPrice(decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemByBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemById(decimal p_id)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemById", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemByIdAndName(decimal p_id, string p_name)
        {
            var p = new DynamicParameters();
            p.Add("id", p_id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemByIdAndName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemByMenuItemId(decimal id)
        {
            var p = new DynamicParameters();
            p.Add("id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemByMenuItemId", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemByName(string p_name)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemByName", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public List<MenuItem> GetMenuItemByNameAndBetweenPrice(string p_name, decimal p_price1, decimal p_price2)
        {
            var p = new DynamicParameters();
            p.Add("name", p_name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("price1", p_price1, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("price2", p_price2, dbType: DbType.Double, direction: ParameterDirection.Input);
            IEnumerable<MenuItem> menuItems = _dbContext.Connection.Query<MenuItem>("MENU_ITEM_PACKAGE.GetMenuItemByNameAndBetweenPrice", p, commandType: CommandType.StoredProcedure);
            return menuItems.AsList();
        }

        public bool InsertMenuItem(MenuItem menuItem)
        {
            var p = new DynamicParameters();
            p.Add("item_name", menuItem.Menu_Item_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("item_price", menuItem.Menu_Item_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("item_quantity", menuItem.Menu_Item_Quantity, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("item_createdat", menuItem.Menu_Item_Createdat, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("item_content", menuItem.Menu_Item_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("menu_id", menuItem.Menu_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("item_image", menuItem.Menu_Item_Image, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_PACKAGE.InsertMenuItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateMenuItem(MenuItem menuItem)
        {
            var p = new DynamicParameters();
            p.Add("item_id", menuItem.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("item_name", menuItem.Menu_Item_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("item_price", menuItem.Menu_Item_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("item_quantity", menuItem.Menu_Item_Quantity, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("item_createdat", menuItem.Menu_Item_Createdat, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("item_content", menuItem.Menu_Item_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("menu_id", menuItem.Menu_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("item_image", menuItem.Menu_Item_Image, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_PACKAGE.UpdateMenuItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
