using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Data
{
    public class Role
    {
        public int Id { get; set; }
        public string Role_Name { get; set; }
        public ICollection<Employee> Employees { get; set; }
    }
}
