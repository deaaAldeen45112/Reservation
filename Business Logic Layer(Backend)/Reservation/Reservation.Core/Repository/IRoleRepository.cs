using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IRoleRepositroy
    {

        public bool InsertRole(Role role);
        public bool UpdateRole(Role role);
        public bool DeleteRoleById(decimal roleId);
        public List<Role> GetAllRole();

    }
}
