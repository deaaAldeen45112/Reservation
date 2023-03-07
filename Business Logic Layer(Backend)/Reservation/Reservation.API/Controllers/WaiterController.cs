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
    public class WaiterController : Controller
    {
        private readonly IWaiterService _waiterService;
        public WaiterController(IWaiterService waiterService)
        {
            _waiterService = waiterService;
        }
        [HttpDelete]
        [Route("{action}/{WaiterId}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteWaiterByWaiterId(decimal WaiterId) 
        {
            return _waiterService.DeleteWaiterByWaiterId(WaiterId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Waiter>), statusCode: StatusCodes.Status200OK)]
        public List<Waiter> GetAllWaiter()
        {
            return _waiterService.GetAllWaiter(); 
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Waiter>), statusCode: StatusCodes.Status200OK)]
        public List<Waiter> GetAvailableWaiter()
        {
            return _waiterService.GetAvailableWaiter();
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertWaiter([FromBody]Waiter waiter)
        {
            return _waiterService.InsertWaiter(waiter);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateWaiter([FromBody]Waiter waiter)
        {
            return _waiterService.UpdateWaiter(waiter);
        }
    }
}
