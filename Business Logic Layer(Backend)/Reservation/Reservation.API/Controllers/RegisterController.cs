
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

    public class RegisterController : Controller
    {
        private readonly IRegisterService _registerService;
        public RegisterController(IRegisterService registerService)
        {
            _registerService = registerService;
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool AddCustomer([FromBody] Register register)
        {
            return _registerService.AddCustomer(register);
        }
    [HttpGet]
    [Route("{action}")]

    public List<Waiter> GetWaiterIdByRegisterId(decimal regId)
    {
      return _registerService.GetWaiterIdByRegisterId(regId);
    }
    [HttpGet]
    [Route("{action}")]

    public List<Customer> GetCustomerIdByRegisterId(decimal regId) {
 return _registerService.GetCustomerIdByRegisterId (regId);
    }

[HttpGet]
    [Route("{action}")]
    public List<Register> GetRegisterByRegisterId(decimal regId)
    {
      return _registerService.GetRegisterByRegisterId(regId);
    }

    [HttpDelete]
        [Route("{action}/{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteCustomer(int id)
        {
            return _registerService.DeleteCustomer(id);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool AddWaiter([FromBody] EmployeeDTO employeeDTO)
        {
            return _registerService.AddWaiter(employeeDTO);
        }

        [HttpDelete]
        [Route("{action}/{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteWaiter(int id)
        {
            return _registerService.DeleteWaiter(id);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateCustomer([FromBody] Register register)
        {
            return _registerService.UpdateCustomer(register);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateEmployee([FromBody] EmployeeDTO employeeDTO)
        {
            return _registerService.UpdateWaiter(employeeDTO);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateAdmin([FromBody] EmployeeDTO employeeDTO)
        {
            return _registerService.UpdateAdmin(employeeDTO);
        }
    [HttpPut]
    [Route("{action}")]
    public bool UpdateRegister(decimal id, string name, string phone, string password) {

      return _registerService.UpdateRegister(id, name, phone, password);  

    }




  }
}
