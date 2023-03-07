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
    public class EmployeeController : Controller
    {
        public readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<EmployeeDTO>), statusCode: StatusCodes.Status200OK)]
        public List<EmployeeDTO> GetAllWaiters()
        {
            return _employeeService.GetAllWaiters();
        }
        [HttpGet]
        [Route("{action}/{id}")]
        [ProducesResponseType(typeof(List<EmployeeDTO>), statusCode: StatusCodes.Status200OK)]
        public List<EmployeeDTO> GetWaiterById(int id)
        {
            return _employeeService.GetWaiterById(id);
        }
        [HttpGet]
        [Route("{action}/{name}")]
        [ProducesResponseType(typeof(List<EmployeeDTO>), statusCode: StatusCodes.Status200OK)]
        public List<EmployeeDTO> FilterWaiterByName(string name)
        {
            return _employeeService.FilterWaiterByName(name);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<EmployeeDTO>), statusCode: StatusCodes.Status200OK)]
        public List<EmployeeDTO> GetAdmin()
        {
            return _employeeService.GetAdmin();
        }

    }
}
