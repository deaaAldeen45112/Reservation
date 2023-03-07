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
    public class PaymentController : Controller
    {
        private readonly IPaymentService _paymentService;
        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool DeletePaymentByPaymentId(decimal PaymentId)
        {
            return _paymentService.DeletePaymentByPaymentId(PaymentId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Payment>), statusCode: StatusCodes.Status200OK)]
        public List<Payment> GetAllPayment()
        {
            return _paymentService.GetAllPayment();
        }


        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Payment>), statusCode: StatusCodes.Status200OK)]
        public List<Payment> GetPaymentByPaymentId(decimal paymentId)
        {
            return _paymentService.GetPaymentByPaymentId(paymentId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertPayment([FromBody]Payment payment)
        {
            return _paymentService.InsertPayment(payment);
        }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> CountingPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentService.CountingPaymentGroupByDate(from_Date, to_Date);
    }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> CountingPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)

    {

      return _paymentService.CountingPaymentByCustomerIdGroupByDate(from_Date, to_Date, id);
    }
    [HttpGet]
    [Route("{action}")]

    public List<PaymentDto> SumPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentService.SumPaymentGroupByDate(from_Date, to_Date);
    }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> SumPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _paymentService.SumPaymentByCustomerIdGroupByDate(from_Date, to_Date, id);
    }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> StatisticPaymentByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentService.StatisticPaymentByDate(from_Date, to_Date);
    }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> StatisticPaymentByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _paymentService.StatisticPaymentByDateAndByCustomerId(from_Date, to_Date, id);
    }
    [HttpGet]
    [Route("{action}")]
    public List<PaymentDto> StatisticPaymentByDateAndGroupByPaymentMethodId(DateTime from_Date, DateTime to_Date)
    {
      return _paymentService.StatisticPaymentByDateAndGroupByPaymentMethodId(from_Date, to_Date);
    }



    [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdatePayment([FromBody]Payment payment)
        {
            return _paymentService.UpdatePayment(payment);
        }
    }
}
