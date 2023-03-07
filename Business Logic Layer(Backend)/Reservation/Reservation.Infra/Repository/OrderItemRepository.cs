using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;
using Reservation.Core.Repository;

namespace Reservation.Infra.Repository
{
    public class OrderItemRepository : IOrderItemRepositroy
    {
        private readonly IDbContext _dbContext;
        public OrderItemRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteOrderItem(decimal p_orderItemId)
        {
            var p = new DynamicParameters();
            p.Add("ord_item_id", p_orderItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("ORDER_ITEM_PACKAGE.DeleteOrderItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<OrderItem> GetAllOrderItem()
        {
            IEnumerable<OrderItem> orderItems=_dbContext.Connection.Query<OrderItem>("ORDER_ITEM_PACKAGE.GetAllOrderItem", commandType: CommandType.StoredProcedure);

            Debug.WriteLine(orderItems);
            
            return orderItems.AsList();
        }

        public List<OrderMenuDTO> GetJoinOrderItemAndMenuItem(decimal p_orderId)
        {
            var p = new DynamicParameters();
            p.Add("ord_id", p_orderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<OrderMenuDTO> orderItems = _dbContext.Connection.Query<OrderMenuDTO>("ORDER_ITEM_PACKAGE.GetJoinOrderItemAndMenuItem", p, commandType: CommandType.StoredProcedure);
            return orderItems.AsList();
        }

        public List<OrderItem> GetOrderItemByOrderId(decimal p_orderId)
        {
            var p = new DynamicParameters();
            p.Add("ord_id", p_orderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<OrderItem> orderItems = _dbContext.Connection.Query<OrderItem>("ORDER_ITEM_PACKAGE.GetOrderItemByOrderId",p, commandType: CommandType.StoredProcedure);
            return orderItems.AsList();
        }

        public List<OrderItem> GetOrderItemByOrderItemId(decimal p_orderItemId)
        {
            var p = new DynamicParameters();
            p.Add("ord_item_id", p_orderItemId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<OrderItem> orderItems = _dbContext.Connection.Query<OrderItem>("ORDER_ITEM_PACKAGE.GetOrderItemByOrderItemId",p, commandType: CommandType.StoredProcedure);
            return orderItems.AsList();
        }

        public bool InsertOrderItem(OrderItem orderItem)
        {
            Debug.WriteLine(orderItem.Order_Item_Price+"kkk");
            var p = new DynamicParameters();
            p.Add("me_item_id", orderItem.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ord_id", orderItem.Order_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ord_item_createdat", orderItem.Order_Item_Createdat, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("ord_item_price", orderItem.Order_Item_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("ord_item_quntity", orderItem.Order_Item_Quantity, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("ORDER_ITEM_PACKAGE.InsertOrderItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateOrderItem(OrderItem orderItem)
        {
            var p = new DynamicParameters();
            p.Add("ord_item_id", orderItem.Order_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("me_item_id", orderItem.Menu_Item_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ord_id", orderItem.Order_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ord_item_createdat", orderItem.Order_Item_Createdat, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("ord_item_price", orderItem.Order_Item_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("ord_item_quntity", orderItem.Order_Item_Quantity, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("ORDER_ITEM_PACKAGE.UpdateOrderItem", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
