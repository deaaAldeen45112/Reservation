using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class OrderItemService : IOrderItemService
    {
        private readonly IOrderItemRepositroy _orderItemRepositroy;
        public OrderItemService(IOrderItemRepositroy orderItemRepositroy)
        {
            _orderItemRepositroy = orderItemRepositroy;
        }

        public bool DeleteOrderItem(decimal orderItemId)
        {
            return _orderItemRepositroy.DeleteOrderItem(orderItemId);
        }

        public List<OrderItem> GetAllOrderItem()
        {
            return _orderItemRepositroy.GetAllOrderItem();
        }

        public List<OrderMenuDTO> GetJoinOrderItemAndMenuItem(decimal orderId)
        {
            return _orderItemRepositroy.GetJoinOrderItemAndMenuItem(orderId);
        }

        public List<OrderItem> GetOrderItemByOrderId(decimal orderId)
        {
            return _orderItemRepositroy.GetOrderItemByOrderId(orderId);
        }

        public List<OrderItem> GetOrderItemByOrderItemId(decimal orderItemId)
        {
            return _orderItemRepositroy.GetOrderItemByOrderItemId(orderItemId);
        }

        public bool InsertOrderItem(OrderItem orderItem)
        {
            return _orderItemRepositroy.InsertOrderItem(orderItem);
        }

        public bool UpdateOrderItem(OrderItem orderItem)
        {
            return _orderItemRepositroy.UpdateOrderItem(orderItem);
        }
    }
}
