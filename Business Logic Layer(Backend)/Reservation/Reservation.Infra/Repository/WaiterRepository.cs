using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;

using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class WaiterRepository: IWaiterRepositroy
    {
        private readonly IDbContext _dbContext;
        public WaiterRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteWaiterByWaiterId(decimal p_WaiterId)
        {
            var p = new DynamicParameters();
            p.Add("WaiterId", p_WaiterId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("WAITER_STATE_PACKAGE.DeleteWAITERByWaiterId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Waiter> GetAllWaiter()
        {
            IEnumerable<Waiter> result = _dbContext.Connection.Query<Waiter>("WAITER_STATE_PACKAGE.GetAllWAITER", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<Waiter> GetAvailableWaiter()
        {
            IEnumerable<Waiter> result = _dbContext.Connection.Query<Waiter>("WAITER_PACKAGE.GetAvailableWAITER", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertWaiter(Waiter waiter)
        {
            var p = new DynamicParameters();
            p.Add("EmployeeId", waiter.Employee_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("WAITER_STATE_PACKAGE.InsertWAITER", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateWaiter(Waiter waiter)
        {
            var p = new DynamicParameters();
            p.Add("WaiterId", waiter.Waiter_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("EmployeeId", waiter.Employee_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("WAITER_STATE_PACKAGE.UpdateWAITER", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
