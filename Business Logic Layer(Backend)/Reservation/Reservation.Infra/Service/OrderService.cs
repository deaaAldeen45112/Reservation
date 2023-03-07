using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;  
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class OrderService : IOrderService
    {
        private IOrderRepositroy _orderRepositroy;
        public OrderService(IOrderRepositroy orderRepositroy)
        {
            _orderRepositroy = orderRepositroy;
        }

    public List<StaticsOrderDto> CountingOrderByDate(DateTime from_Date, DateTime to_Date)
    {
      return _orderRepositroy.CountingOrderByDate(from_Date, to_Date);
    }

    public List<StaticsOrderDto> CountingOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
     return _orderRepositroy.CountingOrderByDateAndByCustomerId(from_Date,to_Date,id);
    }

    public List<StaticsOrderDto> CountingOrderByDateAndByWaiterId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _orderRepositroy.CountingOrderByDateAndByCustomerId(from_Date, to_Date, id);
    }

    public bool DeleteOrder(decimal orderId)
        {
            return _orderRepositroy.DeleteOrder(orderId);
        }

        public List<Basicorder> GetAllOrder()
        {
            return _orderRepositroy.GetAllOrder();
        }

        public List<OrderDto> GetLastOrderId()
        {
            return _orderRepositroy.GetLastOrderId();
        }

    public List<Basicorder> GetOrderByCustomerId(decimal cusId)
    {

      return _orderRepositroy.GetOrderByCustomerId(cusId);
    }

    public List<Basicorder> GetOrderByDate(DateTime fromDate, DateTime toDate)
        {
            return _orderRepositroy.GetOrderByDate(fromDate, toDate);
        }

        public List<Basicorder> GetOrderById(decimal orderId)
        {
            return _orderRepositroy.GetOrderById(orderId);
        }

        public List<Basicorder> GetOrderByWaiterId(decimal waiterId)
        {
            return _orderRepositroy.GetOrderByWaiterId(waiterId);
        }

        public List<Basicorder> GetOrderNotAssignWaiter()
        {
            return _orderRepositroy.GetOrderNotAssignWaiter();
        }

        public bool InsertOrder(Basicorder order)
        {
            return _orderRepositroy.InsertOrder(order);
        }

    public List<StaticsOrderDto> StatisticOrderByDate(DateTime from_Date, DateTime to_Date)
    {
     return _orderRepositroy.StatisticOrderByDate(from_Date, to_Date);
    }

    public List<StaticsOrderDto> StatisticOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
     return _orderRepositroy.StatisticOrderByDateAndByCustomerId(from_Date, to_Date, id);
    }

    public bool UpdateAccessStatusByOrderId(decimal OrderId, string AccessStatus)
        {
            return _orderRepositroy.UpdateAccessStatusByOrderId(OrderId, AccessStatus);
        }

        public bool UpdateOrder(Basicorder order)
        {
            return _orderRepositroy.UpdateOrder(order);
        }

        public bool UpdatePaymentStausByOrderId(decimal OrderId, string PaymentStatus)
        {
            return _orderRepositroy.UpdatePaymentStausByOrderId(OrderId, PaymentStatus);
        }

        public bool UpdateWaiterIdByOrderId(decimal OrderId, decimal WaiterId)
        {
            return _orderRepositroy.UpdateWaiterIdByOrderId(OrderId, WaiterId);
        }
    }
}
