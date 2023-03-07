using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;

using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class MenuItemDiscountRepository: IMenuItemDiscount
    {
        private readonly IDbContext _dbContext;
        public MenuItemDiscountRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool InsertMenuItemDiscount(MenuItemDiscount menuItemDiscount)
        {
            var p = new DynamicParameters();
            p.Add("MenuItemId",menuItemDiscount.Menu_Item_Id ,dbType:DbType.Int32,direction :ParameterDirection.Input);
            p.Add("DiscountRate",menuItemDiscount.Discount_Rate, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("DiscountStartDate", menuItemDiscount.Discount_Start_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DiscountEndDate", menuItemDiscount.Discount_End_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_DISCOUNT_Package.InsertMenuItemDiscount",p, commandType:CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateMenuItemDiscount(MenuItemDiscount menuItemDiscount)
        {
            var p = new DynamicParameters();
            p.Add("DiscountId", menuItemDiscount.Discount_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("MenuItemId", menuItemDiscount.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("DiscountRate", menuItemDiscount.Discount_Rate, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("DiscountStartDate", menuItemDiscount.Discount_Start_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DiscountEndDate", menuItemDiscount.Discount_End_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_DISCOUNT_Package.UpdateMenuItemDiscount", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool DeleteMenuItemDiscount(decimal p_menuItemId)
        {
            Debug.WriteLine(p_menuItemId);
            var p = new DynamicParameters();
            p.Add("DiscountId", p_menuItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_DISCOUNT_Package.DeleteMenuItemDiscountByDiscountId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<MenuItemDiscount> GetAllMenuItemDiscount()
        {
            IEnumerable<MenuItemDiscount> menuItemDiscounts=_dbContext.Connection.Query<MenuItemDiscount>("MENU_ITEM_DISCOUNT_Package.GetAllMenuItemDiscount", commandType: CommandType.StoredProcedure);
            return menuItemDiscounts.AsList();
        }

        public List<MenuItemDiscount> GetMenuItemDiscountByMenuItemId(decimal p_menuItemId)
        {

            Debug.WriteLine(p_menuItemId);
            var p = new DynamicParameters();
            p.Add("menuItemId", p_menuItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItemDiscount> menuItemDiscounts = _dbContext.Connection.Query<MenuItemDiscount>("MENU_ITEM_DISCOUNT_Package.GetMenuItemDiscountByMenuItemId",p, commandType: CommandType.StoredProcedure);
            return menuItemDiscounts.AsList();
        }

        public List<MenuItemDiscount> GetMenuItemDiscountByDiscountId(decimal discountId)
        {

            var p = new DynamicParameters();
            p.Add("discountId", discountId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            IEnumerable<MenuItemDiscount> menuItemDiscounts = _dbContext.Connection.Query<MenuItemDiscount>("MENU_ITEM_DISCOUNT_Package.GetMenuItemDiscountByDiscountId",p, commandType: CommandType.StoredProcedure);
            return menuItemDiscounts.AsList();
        }
    }
}
