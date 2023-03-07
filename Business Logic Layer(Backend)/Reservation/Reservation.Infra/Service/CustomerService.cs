using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class CustomerService:ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public List<CustomerDTO> GetAllCustomers()
        {
            return _customerRepository.GetAllCustomers();
        }
        public List<CustomerDTO> GetCustomerByName(string name)
        {
            return _customerRepository.GetCustomerByName(name);
        }
        public List<CustomerDTO> FilterCustomerByName(string name)
        {
            return _customerRepository.FilterCustomerByName(name);
        }
        public List<CustomerDTO> GetCustomerById(int id)
        {
            return _customerRepository.GetCustomerById(id);
        }
    }
}
