using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public class Basicorder
    {
        public Basicorder()
        {
            Order_Items = new HashSet<OrderItem>();
            Payments = new HashSet<Payment>();
        }

        public decimal Order_Id { get; set; }
        public decimal? Customer_Id { get; set; }
        public string Payment_Status { get; set; }
        public string Access_Status { get; set; }
        public DateTime? Order_Createdat { get; set; }
        public decimal? Waiter_Id { get; set; }
        public decimal order_price { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual Waiter Waiter { get; set; }
        public virtual ICollection<OrderItem> Order_Items { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
