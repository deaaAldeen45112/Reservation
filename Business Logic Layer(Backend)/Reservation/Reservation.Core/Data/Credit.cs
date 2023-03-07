using System;
using System.Collections.Generic;
namespace Reservation.Core.Data
{
    public partial class Credit
    {
        public Credit()
        {
            Payments = new HashSet<Payment>();
        }

        public decimal Credit_Id { get; set; }
        public string Credit_Number { get; set; }
        public decimal? Credit_Amount { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
