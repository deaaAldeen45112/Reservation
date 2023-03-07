using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IOrderItemService
    {
        public bool InsertOrderItem(OrderItem orderItem);
        public bool UpdateOrderItem(OrderItem orderItem);
        public bool DeleteOrderItem(decimal orderItemId);
        public List<OrderItem> GetAllOrderItem();
        public List<OrderItem> GetOrderItemByOrderItemId(decimal orderItemId);
        public List<OrderItem> GetOrderItemByOrderId(decimal orderId);
        //dto
        public List<OrderMenuDTO> GetJoinOrderItemAndMenuItem(decimal orderId);
    }
}
