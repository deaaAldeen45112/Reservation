using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IRegisterRepository
    {
    public List<Waiter> GetWaiterIdByRegisterId(decimal regId);
    public List<Customer> GetCustomerIdByRegisterId(decimal regId);
    public List<Register> GetRegisterByRegisterId(decimal regId);
    public bool UpdateRegister(decimal id,string name, string phone, string password);
    public bool AddCustomer(Register register);
    public bool AddWaiter(EmployeeDTO employeeDTO);
    public bool DeleteWaiter(int id);
    public bool DeleteCustomer(int id);
    public bool UpdateCustomer(Register register);
    public bool UpdateWaiter(EmployeeDTO employeeDTO);
    public bool UpdateAdmin(EmployeeDTO employeeDTO);
    }
}
