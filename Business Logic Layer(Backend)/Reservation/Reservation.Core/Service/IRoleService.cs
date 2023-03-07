
using System;
using System.Collections.Generic;
using System.Text;

using Reservation.Core.Data;
namespace Reservation.Core.Service
{
    public interface IRoleService
    {

        public bool InsertRole(Role role);
        public bool UpdateRole(Role role);
        public bool DeleteRoleById(decimal roleId);
        public List<Role> GetAllRole();

    }
}
