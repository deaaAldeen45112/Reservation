using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class RegisterService :IRegisterService
    {
        private readonly IRegisterRepository _registerRepository;
        public RegisterService(IRegisterRepository registerRepository)
        {
            _registerRepository = registerRepository;
        }

        public bool AddCustomer(Register register)
        {
            return _registerRepository.AddCustomer(register);
        }

        public bool AddWaiter(EmployeeDTO employeeDTO)
        {
            return _registerRepository.AddWaiter(employeeDTO);
        }

        public bool DeleteCustomer(int id)
        {
            return _registerRepository.DeleteCustomer(id);
        }

        public bool DeleteWaiter(int id)
        {
            return _registerRepository.DeleteWaiter(id);
        }

        public bool UpdateCustomer(Register register)
        {
            return _registerRepository.UpdateCustomer(register);
        }

        public bool UpdateWaiter(EmployeeDTO employeeDTO)
        {
            return _registerRepository.UpdateWaiter(employeeDTO);
        }
        public bool UpdateAdmin(EmployeeDTO employeeDTO)
        {
            return _registerRepository.UpdateAdmin(employeeDTO);
        }

    public List<Waiter> GetWaiterIdByRegisterId(decimal regId)
    {
      return _registerRepository.GetWaiterIdByRegisterId(regId);
    }

    public List<Customer> GetCustomerIdByRegisterId(decimal regId)
    {
      return _registerRepository.GetCustomerIdByRegisterId(regId);
    }

    public List<Register> GetRegisterByRegisterId(decimal regId)
    {
      return _registerRepository.GetRegisterByRegisterId(regId);
    }

    public bool UpdateRegister(decimal id, string name, string phone, string password)
    {
    return _registerRepository.UpdateRegister(id, name, phone, password);
    }
  }
}
