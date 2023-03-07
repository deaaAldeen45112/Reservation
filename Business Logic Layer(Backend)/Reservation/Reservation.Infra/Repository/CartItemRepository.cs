using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;



namespace Reservation.Infra.Repository
{
    public class CartItemRepository:ICartItemRepository
    {
        private readonly IDbContext _dbContext;
        public CartItemRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool AddToCartItem(CartItem cartItem)
        {
      Debug.WriteLine(cartItem.Cart_Item_Price+"  kkkk");
      var p = new DynamicParameters();
            p.Add("p_cart_id", cartItem.Cart_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_MENU_ITEM_ID", cartItem.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_cart_item_price", cartItem.Cart_Item_Price, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("p_cart_item_quantity", cartItem.Cart_Item_Quantity, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_ADD_DATE", DateTime.Now, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("cart_item_package.add_cart_item", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool DeleteFromCartItem(CartItem cartItem)
        {
            var p = new DynamicParameters();
            p.Add("P_CART_ITEM_ID", cartItem.Cart_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("cart_item_package.DELETE_FROM_CART_ITEM", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<CartItem> GetCartItems(CartItem cartItem)
        {
            var p = new DynamicParameters();
            p.Add("P_CART_ID", cartItem.Cart_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CartItem> result = _dbContext.Connection.Query<CartItem>("cart_item_package.get_cart_items", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CartItem> GetExpensiveCartItem(CartItem cartItem)
        {
            var p = new DynamicParameters();
            p.Add("P_CART_ID", cartItem.Cart_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CartItem> result = _dbContext.Connection.Query<CartItem>("cart_item_package.GET_EXPENSIVE_CART_ITEM", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CartItem> GetCartItemByName(CartItem cartItem,string menuItemName)
        {
            var p = new DynamicParameters();
            p.Add("P_CART_ID", cartItem.Cart_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_MENU_ITEM_NAME", menuItemName, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CartItem> result = _dbContext.Connection.Query<CartItem>("cart_item_package.GET_ITEM_BY_NAME", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CartItem> GetCartItemByProductId(CartItem cartItem)
        {
            var p = new DynamicParameters();
            p.Add("P_CART_ID", cartItem.Cart_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_MENU_ITEM_ID", cartItem.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CartItem> result = _dbContext.Connection.Query<CartItem>("cart_item_package.GET_ITEM_BY_PRODUCT_ID", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool DeleteFromCartItemByCartItemId(decimal cartItemId)
        {
            var p = new DynamicParameters();
            p.Add("cartItemId", cartItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("cart_item_package.DeleteFromCartItemByCartItemId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool DeleteAllCartItemByCartId(decimal cartId)
        {
            var p = new DynamicParameters();
            p.Add("cartId", cartId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("cart_item_package.DeleteAllCartItemByCartId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<CartMenuItemDto> GetCartItemByCartId(decimal cartId)
        {
            var p = new DynamicParameters();
            p.Add("cartId", cartId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CartMenuItemDto> result = _dbContext.Connection.Query<CartMenuItemDto>("cart_item_package.GetCartItemByCartId", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
