using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
   public interface ICustomerRepository
    {
        public List<CustomerDTO> GetAllCustomers();
        public List<CustomerDTO> GetCustomerByName(string name);
        public List<CustomerDTO> FilterCustomerByName(string name);
        public List<CustomerDTO> GetCustomerById(int id);
    }
}
