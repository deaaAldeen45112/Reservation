using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IEmployeeRepository
    {
        
        public List<EmployeeDTO> GetAllWaiters();
        public List<EmployeeDTO> GetWaiterById(int id);
        public List<EmployeeDTO> FilterWaiterByName(string name);
        public List<EmployeeDTO> GetAdmin();
    }
}
