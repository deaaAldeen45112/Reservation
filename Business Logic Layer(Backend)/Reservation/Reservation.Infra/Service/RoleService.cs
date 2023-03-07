using System;
using System.Collections.Generic;
using System.Text;
using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
namespace Reservation.Infra.Service
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepositroy _roleRepository;
        public RoleService(IRoleRepositroy roleRepository)
        {
            _roleRepository = roleRepository;
        }
        public bool DeleteRoleById(decimal roleId)
        {
           return _roleRepository.DeleteRoleById(roleId);
        }

        public List<Role> GetAllRole()
        {
            return _roleRepository.GetAllRole();
        }

        public bool InsertRole(Role role)
        {
            return _roleRepository.InsertRole(role);
        }

        public bool UpdateRole(Role role)
        {
          return  _roleRepository.UpdateRole(role);
        }
    }
}
