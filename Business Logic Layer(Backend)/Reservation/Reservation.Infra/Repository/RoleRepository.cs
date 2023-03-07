using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;

using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

using Reservation.Core.Repository;
using System.Diagnostics;

namespace Reservation.Infra.Repository
{
    public class RoleRepository : IRoleRepositroy
    {
        private readonly IDbContext _dbContext;
        public RoleRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteRoleById(decimal roleId)
        {

            var p = new DynamicParameters();
            p.Add("role_Id", roleId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Role_PACKAGE.DeleteROLEById", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Role> GetAllRole()
        {
            IEnumerable<Role> result = _dbContext.Connection.Query<Role>("Role_PACKAGE.GetAllRole", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertRole(Role role)
        {

            Debug.WriteLine(role.Role_Name+" name ");
            var p = new DynamicParameters();
            p.Add("RoleName", role.Role_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Role_PACKAGE.InsertRole", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateRole(Role role)
        {
            var p = new DynamicParameters();
            p.Add("RoleName", role.Role_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("role_Id", role.Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Role_PACKAGE.UpdateRole", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }

}
