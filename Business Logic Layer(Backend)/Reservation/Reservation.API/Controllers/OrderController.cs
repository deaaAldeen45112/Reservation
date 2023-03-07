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
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }
        [HttpDelete]
        [Route("{action}")]
        public bool DeleteOrder(decimal orderId)
        {
            return _orderService.DeleteOrder(orderId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Basicorder>), statusCode: StatusCodes.Status200OK)]
        public List<Basicorder> GetAllOrder()
        {
            return _orderService.GetAllOrder();
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Basicorder>), statusCode: StatusCodes.Status200OK)]
        public List<Basicorder> GetOrderNotAssignWaiter()
        {
            return _orderService.GetOrderNotAssignWaiter();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Basicorder>), statusCode: StatusCodes.Status200OK)]
        public List<Basicorder> GetOrderByWaiterId(decimal waiterId)
        {
            return _orderService.GetOrderByWaiterId(waiterId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<OrderDto>), statusCode: StatusCodes.Status200OK)]
        public List<OrderDto> GetLastOrderId()
        {
            return _orderService.GetLastOrderId();
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Basicorder>), statusCode: StatusCodes.Status200OK)]
        public List<Basicorder> GetOrderByDate(DateTime fromDate, DateTime toDate)
        {
            return _orderService.GetOrderByDate(fromDate, toDate);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Basicorder>), statusCode: StatusCodes.Status200OK)]
        public List<Basicorder> GetOrderById(decimal orderId)
        {
            return _orderService.GetOrderById(orderId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertOrder([FromBody]Basicorder order)
        {
            return _orderService.InsertOrder(order);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateAccessStatusByOrderId(decimal OrderId, string AccessStatus) 
        {
            return _orderService.UpdateAccessStatusByOrderId(OrderId, AccessStatus);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateOrder([FromBody]Basicorder order)
        {
            return _orderService.UpdateOrder(order);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdatePaymentStausByOrderId(decimal OrderId, string PaymentStatus)
        {
            return _orderService.UpdatePaymentStausByOrderId(OrderId, PaymentStatus);
        }
    [HttpGet]
    [Route("{action}")]
    public List<StaticsOrderDto> CountingOrderByDate(DateTime from_Date, DateTime to_Date)
    {
      return _orderService.CountingOrderByDate(from_Date, to_Date);
    }
    [HttpGet]
    [Route("{action}")]
    public List<StaticsOrderDto> CountingOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _orderService.CountingOrderByDateAndByCustomerId(from_Date, to_Date, id);
    }
    [HttpGet]
    [Route("{action}")]
    public List<StaticsOrderDto> CountingOrderByDateAndByWaiterId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _orderService.CountingOrderByDateAndByCustomerId(from_Date, to_Date, id);
    }

    [HttpGet]
    [Route("{action}")]
    public List<Basicorder> GetOrderByCustomerId(decimal cusId)
    {

      return _orderService.GetOrderByCustomerId(cusId);
    }
    [HttpGet]
    [Route("{action}")]
    public List<StaticsOrderDto> StatisticOrderByDate(DateTime from_Date, DateTime to_Date)
    {
      return _orderService.StatisticOrderByDate(from_Date, to_Date);
    }
    [HttpGet]
    [Route("{action}")]
    public List<StaticsOrderDto> StatisticOrderByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _orderService.StatisticOrderByDateAndByCustomerId(from_Date, to_Date, id);
    }




    [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateWaiterIdByOrderId(decimal OrderId, decimal WaiterId)
        {
            return _orderService.UpdateWaiterIdByOrderId(OrderId, WaiterId);
        }
    }
}
