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
    public class MenuItemReviewRepository : IMenuItemReviewRepositroy
    {
        private readonly IDbContext _dbContext;
        public MenuItemReviewRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteMenuItemReview(decimal p_menuItemReviewId)
        {
            var p = new DynamicParameters();
            p.Add("me_item_review_id", p_menuItemReviewId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("MENU_ITEM_REVIEW_PACKAGE.DeleteMenuItemReview", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<MenuItemReview> GetAllMenuItemReview()
        {
            IEnumerable<MenuItemReview> menuItemReviews=_dbContext.Connection.Query<MenuItemReview>("MENU_ITEM_REVIEW_PACKAGE.GetAllMenuItemReview", commandType: CommandType.StoredProcedure);
            return menuItemReviews.AsList();
        }

        public List<MenuItemReview> GetMenuItemReviewByMenuItemId(decimal p_menuItemId)
        {
            var p = new DynamicParameters();
            p.Add("me_item_id", p_menuItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItemReview> menuItemReviews= _dbContext.Connection.Query<MenuItemReview>("MENU_ITEM_REVIEW_PACKAGE.GetMenuItemReviewByMenuItemId", p, commandType: CommandType.StoredProcedure);
            return menuItemReviews.AsList();
        }

        public List<MenuItemReview> GetMenuItemReviewByMenuItemReviewId(decimal p_menuItemReviewId)
        {
            var p = new DynamicParameters();
            p.Add("me_item_review_id", p_menuItemReviewId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<MenuItemReview> menuItemReviews = _dbContext.Connection.Query<MenuItemReview>("MENU_ITEM_REVIEW_PACKAGE.GetMenuItemReviewByMenuItemReviewId", p, commandType: CommandType.StoredProcedure);
            return menuItemReviews.AsList();
        }

        public bool InsertMenuItemReview(MenuItemReview menuItemReview)
        {
            var p = new DynamicParameters();
            p.Add("me_item_id", menuItemReview.Menu_Item_Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("me_item_review_title", menuItemReview.Menu_Item_Review_Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("me_item_rating", menuItemReview.Menu_Item_Rating, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("me_item_review_createdat", menuItemReview.Menu_Item_Review_Createdat, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("me_item_content", menuItemReview.Menu_Item_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_REVIEW_PACKAGE.InsertMenuItemReview", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateMenuItemReview(MenuItemReview menuItemReview)
        {
            var p = new DynamicParameters();
            p.Add("me_item_review_id", menuItemReview.Menu_Item_Review_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("me_item_id", menuItemReview.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("me_item_review_title", menuItemReview.Menu_Item_Review_Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("me_item_rating", menuItemReview.Menu_Item_Rating, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("me_item_review_createdat", menuItemReview.Menu_Item_Review_Createdat, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("me_item_content", menuItemReview.Menu_Item_Content, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("MENU_ITEM_REVIEW_PACKAGE.UpdateMenuItemReview", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
