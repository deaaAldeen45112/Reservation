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
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;

        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<CustomerDTO>), statusCode: StatusCodes.Status200OK)]
        public List<CustomerDTO> GetAllCustomers()
        {
            return _customerService.GetAllCustomers();
        }
        [HttpGet]
        [Route("{action}/{name}")]
        [ProducesResponseType(typeof(List<CustomerDTO>), statusCode: StatusCodes.Status200OK)]
        public List<CustomerDTO> GetByName(string name)
        {
            return _customerService.GetCustomerByName(name);
        }
        [HttpGet]
        [Route("{action}/{name}")]
        [ProducesResponseType(typeof(List<CustomerDTO>), statusCode: StatusCodes.Status200OK)]
        public List<CustomerDTO> FilterByName(string name)
        {
            return _customerService.FilterCustomerByName(name);
        }
        [HttpGet]
        [Route("{action}/{id}")]
        [ProducesResponseType(typeof(List<Register>), statusCode: StatusCodes.Status200OK)]
        public List<CustomerDTO> GetById(int id)
        {
            return _customerService.GetCustomerById(id);
        }
    }
}
