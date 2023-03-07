using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IOrderRepositroy
    {
    public List<Basicorder> GetOrderByCustomerId(decimal cusId);
    public List<StaticsOrderDto> CountingOrderByDate(DateTime from_Date, DateTime to_Date);
    public List<StaticsOrderDto> CountingOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id);
    public List<StaticsOrderDto> CountingOrderByDateAndByWaiterId(DateTime from_Date, DateTime to_Date,decimal id);
    public List<StaticsOrderDto> StatisticOrderByDate(DateTime from_Date, DateTime to_Date);
    public List<StaticsOrderDto> StatisticOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date,decimal id);

    public List<Basicorder> GetOrderByWaiterId(decimal waiterId);
        public List<Basicorder> GetOrderNotAssignWaiter();
        public List<OrderDto> GetLastOrderId();
        public bool InsertOrder(Basicorder order);
        public bool UpdateOrder(Basicorder order);
        public bool DeleteOrder(decimal orderId);
        public List<Basicorder> GetAllOrder();
        public List<Basicorder> GetOrderById(decimal orderId);
        public List<Basicorder> GetOrderByDate(DateTime fromDate, DateTime toDate);
        public bool UpdatePaymentStausByOrderId(decimal OrderId, string PaymentStatus);
        public bool UpdateAccessStatusByOrderId(decimal OrderId, string AccessStatus);
        public bool UpdateWaiterIdByOrderId(decimal OrderId, decimal WaiterId);

    }
}
