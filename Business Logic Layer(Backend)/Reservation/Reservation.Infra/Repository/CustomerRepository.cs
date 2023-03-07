using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;


namespace Reservation.Infra.Repository
{
    public class CustomerRepository:ICustomerRepository
    {
        private readonly IDbContext _dbContext;
        public CustomerRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<CustomerDTO> GetAllCustomers ()
        {
            IEnumerable<CustomerDTO> result = _dbContext.Connection.Query<CustomerDTO>("Customer_Package.get_all_Customers", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CustomerDTO> GetCustomerByName(string name)
        {
            var p = new DynamicParameters();
            p.Add("P_Name", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<CustomerDTO> result = _dbContext.Connection.Query<CustomerDTO>("Customer_Package.GET_BY_NAME", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CustomerDTO> FilterCustomerByName(string name)
        {
            var p = new DynamicParameters();
            p.Add("P_Name", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<CustomerDTO> result = _dbContext.Connection.Query<CustomerDTO>("Customer_Package.FILTER_BY_NAME", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<CustomerDTO> GetCustomerById(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<CustomerDTO> result = _dbContext.Connection.Query<CustomerDTO>("Customer_Package.GET_BY_ID", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
