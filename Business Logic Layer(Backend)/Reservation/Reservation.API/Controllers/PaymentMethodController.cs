using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : Controller
    {
        private readonly IPaymentMethodService _paymentMethodService;
        public PaymentMethodController(IPaymentMethodService paymentMethodService)
        {
            _paymentMethodService = paymentMethodService;
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeletePaymentMethodByPaymentMethodId(decimal PaymentMethodId)
        {
            return _paymentMethodService.DeletePaymentMethodByPaymentMethodId(PaymentMethodId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<PaymentMethod>), statusCode: StatusCodes.Status200OK)]
        public List<PaymentMethod> GetAllPaymentMethod()
        {
            return _paymentMethodService.GetAllPaymentMethod();
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<PaymentMethod>), statusCode: StatusCodes.Status200OK)]
        public List<PaymentMethod> GetPaymentMethodByPaymentMethodId(decimal paymentMethodId)
        {
            return _paymentMethodService.GetPaymentMethodByPaymentMethodId(paymentMethodId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertPaymentMethod([FromBody]PaymentMethod paymentMethod)
        {
            return _paymentMethodService.InsertPaymentMethod(paymentMethod);
        }

        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdatePaymentMethod([FromBody]PaymentMethod paymentMethod) 
        {
            return _paymentMethodService.UpdatePaymentMethod(paymentMethod);
        }
    }
}
