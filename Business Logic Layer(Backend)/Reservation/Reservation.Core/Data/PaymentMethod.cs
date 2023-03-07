using System;
using System.Collections.Generic;
namespace Reservation.Core.Data
{
    public partial class PaymentMethod
    {
        public PaymentMethod()
        {
            Payments = new HashSet<Payment>();
        }

        public decimal Payment_Method_Id { get; set; }
        public string Payment_Method_Name { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
