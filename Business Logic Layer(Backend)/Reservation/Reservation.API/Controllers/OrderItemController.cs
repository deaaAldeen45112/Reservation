using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemController : Controller
    {
        private readonly IOrderItemService _orderItemService;
        public OrderItemController(IOrderItemService orderItemService)
        {
            _orderItemService = orderItemService;
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteOrderItem(decimal orderItemId)
        {
            return _orderItemService.DeleteOrderItem(orderItemId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<OrderItem>), statusCode: StatusCodes.Status200OK)]
        public List<OrderItem> GetAllOrderItem()
        {
            return _orderItemService.GetAllOrderItem();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<OrderMenuDTO>), statusCode: StatusCodes.Status200OK)]
        public List<OrderMenuDTO> GetJoinOrderItemAndMenuItem(decimal orderId)
        {
            return _orderItemService.GetJoinOrderItemAndMenuItem(orderId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<OrderItem>), statusCode: StatusCodes.Status200OK)]
        public List<OrderItem> GetOrderItemByOrderId(decimal orderId)
        {
            return _orderItemService.GetOrderItemByOrderId(orderId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<OrderItem>), statusCode: StatusCodes.Status200OK)]
        public List<OrderItem> GetOrderItemByOrderItemId(decimal orderItemId)
        {
            return _orderItemService.GetOrderItemByOrderItemId(orderItemId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertOrderItem([FromBody]OrderItem orderItem)
        {
            return _orderItemService.InsertOrderItem(orderItem);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateOrderItem([FromBody]OrderItem orderItem)
        {
            return _orderItemService.UpdateOrderItem(orderItem);
        }
    }
}
