using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
    public class EmployeeDTO
    {
        public int Employee_Id { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public DateTime Hire_Date { get; set; }
        public float Salary{ get; set; }
        public int Role_id { get; set; }
    }
}
