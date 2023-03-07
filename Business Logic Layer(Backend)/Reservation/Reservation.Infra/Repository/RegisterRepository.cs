using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Infra.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class RegisterRepository : IRegisterRepository
    {
        private readonly IDbContext _dbContext;
        public RegisterRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool AddCustomer(Register register)
        {
            var p = new DynamicParameters();
            p.Add("P_Email",register.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", register.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Phone", register.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Name", register.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Customer_Package.ADD_CUSTOMER", p, commandType: CommandType.StoredProcedure);
            return true;
        }



    public List<Waiter> GetWaiterIdByRegisterId(decimal regId)
    {
      var p = new DynamicParameters();
      p.Add("regId", regId, dbType: DbType.Int32, direction: ParameterDirection.Input);
      IEnumerable<Waiter> result = _dbContext.Connection.Query<Waiter>("register_package.getwaiterbyregisterid", p, commandType: CommandType.StoredProcedure);
      return result.AsList();
    }
    public List<Customer> GetCustomerIdByRegisterId(decimal regId)
    {
      var p = new DynamicParameters();
      p.Add("regId", regId, dbType: DbType.Int32, direction: ParameterDirection.Input);
      IEnumerable<Customer> result = _dbContext.Connection.Query<Customer>("register_package.getcustomerbyregisterid", p, commandType: CommandType.StoredProcedure);
      return result.AsList();
    }
    public bool AddWaiter(EmployeeDTO employeeDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_Email", employeeDTO.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", employeeDTO.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Phone", employeeDTO.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Name", employeeDTO.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Hire_Date", DateTime.Now, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("P_Salary", employeeDTO.Salary, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("P_Role_Id", EmployeeRole.Employee, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Waiter_Package.Add_Waiter", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool DeleteWaiter(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Waiter_Package.Delete_Waiter", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool DeleteCustomer(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Customer_Package.Delete_Customer", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateCustomer(Register register)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", register.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);//registerId
            p.Add("P_Email", register.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", register.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Phone", register.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Name", register.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Customer_Package.UPDATE_CUSTOMER", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateWaiter(EmployeeDTO employeeDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", employeeDTO.Employee_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_Email", employeeDTO.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", employeeDTO.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Phone", employeeDTO.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Name", employeeDTO.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Salary", employeeDTO.Salary, dbType: DbType.Double, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Waiter_Package.UPDATE_Waiter", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateAdmin(EmployeeDTO employeeDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", employeeDTO.Employee_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_Email", employeeDTO.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", employeeDTO.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Phone", employeeDTO.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Name", employeeDTO.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Salary", employeeDTO.Salary, dbType: DbType.Double, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("Admin_Package.UPDATE_PROFILE", p, commandType: CommandType.StoredProcedure);
            return true;
        }

    public List<Register> GetRegisterByRegisterId(decimal regId)
    {
      var p = new DynamicParameters();
      p.Add("regId", regId, dbType: DbType.Int32, direction: ParameterDirection.Input);
      IEnumerable<Register> result = _dbContext.Connection.Query<Register>("register_package.GetRegisterByRegisterId", p, commandType: CommandType.StoredProcedure);
      return result.AsList();
    }

    public bool UpdateRegister(decimal id,string name, string phone, string password)
    {
      var p = new DynamicParameters();
      p.Add("regId", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
      p.Add("na", name, dbType: DbType.String, direction: ParameterDirection.Input);
      p.Add("pho", phone, dbType: DbType.String, direction: ParameterDirection.Input);
      p.Add("pass", password, dbType: DbType.String, direction: ParameterDirection.Input);
      var result = _dbContext.Connection.ExecuteAsync("register_package.updateregister", p, commandType: CommandType.StoredProcedure);
      return true;
    }
  }
}
