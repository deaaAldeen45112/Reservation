using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _roleService;
        public RoleController(IRoleService roleService)
        {
            _roleService = roleService;
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]

        public bool InsertRole(Role role) { 
        
        return _roleService.InsertRole(role);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]

        public bool UpdateRole(Role role) { 
        return _roleService.UpdateRole(role);
        }
        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]

        public bool DeleteRoleById(decimal roleId) { 
        
        return _roleService.DeleteRoleById(roleId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]

        public List<Role> GetAllRole() { 
        
        return _roleService.GetAllRole();
        
        }







    }
}
