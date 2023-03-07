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
    public class OrderRepository : IOrderRepositroy
    {
        private readonly IDbContext _dbContext;
        public OrderRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    public List<StaticsOrderDto> CountingOrderByDate(DateTime from_Date, DateTime to_Date)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      IEnumerable<StaticsOrderDto> basicorders = _dbContext.Connection.Query<StaticsOrderDto>("order_package.CountingOrderByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public List<StaticsOrderDto> CountingOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
      IEnumerable<StaticsOrderDto> basicorders = _dbContext.Connection.Query<StaticsOrderDto>("order_package.CountingOrderByDateAndByCustomerId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public List<StaticsOrderDto> CountingOrderByDateAndByWaiterId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
      IEnumerable<StaticsOrderDto> basicorders = _dbContext.Connection.Query<StaticsOrderDto>("order_package.CountingOrderByDateAndByWaiterId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public bool DeleteOrder(decimal p_orderId)
        {
            var p = new DynamicParameters();
            p.Add("ord_id", p_orderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("order_package.DeleteOrder", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Basicorder> GetAllOrder()
        {
            IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetAllOrder", commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

        public List<OrderDto> GetLastOrderId()
        {
            IEnumerable<OrderDto> basicorders = _dbContext.Connection.Query<OrderDto>("order_package.GetLastOrderId", commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

    public List<Basicorder> GetOrderByCustomerId(decimal cusId)
    {
      var p = new DynamicParameters();
      p.Add("cusId", cusId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
      IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetOrderByCustomerId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public List<Basicorder> GetOrderByDate(DateTime fromDate, DateTime toDate)
        {
            var p = new DynamicParameters();
            p.Add("from_Date", fromDate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("to_Date", toDate, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetOrderByDate",p, commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

        public List<Basicorder> GetOrderById(decimal p_orderId)
        {
            var p = new DynamicParameters();
            p.Add("ord_id", p_orderId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetOrderById",p, commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

        public List<Basicorder> GetOrderByWaiterId(decimal waiterId)
        {
            var p = new DynamicParameters();
            p.Add("waiterId", waiterId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetOrderByWaiterId",p, commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

        public List<Basicorder> GetOrderNotAssignWaiter()
        {
            IEnumerable<Basicorder> basicorders = _dbContext.Connection.Query<Basicorder>("order_package.GetOrderNotAssignWaiter", commandType: CommandType.StoredProcedure);
            return basicorders.AsList();
        }

        public bool InsertOrder(Basicorder order)
        {
            Debug.WriteLine(order.Access_Status+"aa");
            var p = new DynamicParameters();
            p.Add("customer_id", order.Customer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("payment_status", order.Payment_Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("access_status", order.Access_Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("order_createdate", order.Order_Createdat, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("WaiterId", order.Waiter_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("price", order.order_price, dbType: DbType.Decimal, direction: ParameterDirection.Input);


      var result = _dbContext.Connection.ExecuteAsync("order_package.InsertOrder", p, commandType: CommandType.StoredProcedure);
            return true;
        }

    public List<StaticsOrderDto> StatisticOrderByDate(DateTime from_Date, DateTime to_Date)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      IEnumerable<StaticsOrderDto> basicorders = _dbContext.Connection.Query<StaticsOrderDto>("order_package.StatisticOrderByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public List<StaticsOrderDto> StatisticOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
      IEnumerable<StaticsOrderDto> basicorders = _dbContext.Connection.Query<StaticsOrderDto>("order_package.StatisticOrderByDateAndByCustomerId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();
    }

    public bool UpdateAccessStatusByOrderId(decimal p_OrderId, string p_AccessStatus)
        {


            
            var p = new DynamicParameters();
            p.Add("OrderId", p_OrderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("AccessStatus", p_AccessStatus, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("order_package.UpdateAccessStatusByOrderId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateOrder(Basicorder order)
        {

            Debug.WriteLine(order.Access_Status + "aa"+" "+order.Order_Id);
            var p = new DynamicParameters();
            p.Add("ord_id", order.Order_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("cust_id", order.Customer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("pay_status", order.Payment_Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("acc_status", order.Access_Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("ord_createdate", order.Order_Createdat, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("WaiterId", order.Waiter_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("price", order.order_price, dbType: DbType.Decimal, direction: ParameterDirection.Input);

      var result = _dbContext.Connection.ExecuteAsync("order_package.UpdateOrder", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdatePaymentStausByOrderId(decimal p_OrderId, string p_PaymentStatus)
        {
            var p = new DynamicParameters();
            p.Add("OrderId", p_OrderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("PaymentStatus", p_PaymentStatus, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("order_package.UpdatePaymentStausByOrderId", p, commandType: CommandType.StoredProcedure);
            return true;
    }

        public bool UpdateWaiterIdByOrderId(decimal p_OrderId, decimal p_WaiterId)
        {
            var p = new DynamicParameters();
            p.Add("OrderId", p_OrderId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("WaiterId", p_WaiterId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("order_package.UpdateWaiterIdByOrderId", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
