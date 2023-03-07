using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class EmployeeRepository :IEmployeeRepository
    {
        private readonly IDbContext _dbContext;
        public EmployeeRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
       
        public List<EmployeeDTO> GetAllWaiters()
        {
            IEnumerable<EmployeeDTO> employees = _dbContext.Connection.Query<EmployeeDTO>("Waiter_Package.GET_ALL_WAITERS", commandType: CommandType.StoredProcedure);
            return employees.ToList();
        }
        public List<EmployeeDTO> GetWaiterById(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<EmployeeDTO> employees = _dbContext.Connection.Query<EmployeeDTO>("Waiter_Package.get_by_ID",p, commandType: CommandType.StoredProcedure);
            return employees.ToList();
        }
        public List<EmployeeDTO> FilterWaiterByName(string name)
        {   
            var p = new DynamicParameters();
            p.Add("P_NAME", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<EmployeeDTO> employees = _dbContext.Connection.Query<EmployeeDTO>("Waiter_Package.FILTER_by_name", p,commandType: CommandType.StoredProcedure);
            return employees.ToList();
        }
        public List<EmployeeDTO> GetAdmin()
        {
            IEnumerable<EmployeeDTO> employees = _dbContext.Connection.Query<EmployeeDTO>("Admin_Package.GET_ADMIN", commandType: CommandType.StoredProcedure);
            return employees.ToList();
        }

    }
}
