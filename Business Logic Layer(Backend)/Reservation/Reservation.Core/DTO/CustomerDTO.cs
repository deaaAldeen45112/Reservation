using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
    public class CustomerDTO
    {
        public int Customer_Id { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public string Role_Name { get; set; }
    }
}
