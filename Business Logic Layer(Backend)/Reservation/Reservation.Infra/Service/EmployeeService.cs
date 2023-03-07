using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public List<EmployeeDTO> GetAllWaiters()
        {
            return _employeeRepository.GetAllWaiters();
        }
        public List<EmployeeDTO> GetWaiterById(int id)
        {
            return _employeeRepository.GetWaiterById(id);
        }
        public List<EmployeeDTO> FilterWaiterByName(string name)
        {
            return _employeeRepository.FilterWaiterByName(name);
        }
        public List<EmployeeDTO> GetAdmin()
        {
            return _employeeRepository.GetAdmin();
        }
    }
}
