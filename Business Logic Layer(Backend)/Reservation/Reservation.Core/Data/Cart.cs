using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Reservation.Core.Data
{
    public class Cart
    {
        [Key]
        public int Cart_Id { get; set; }
        public int Customer_Id { get; set; }
        [ForeignKey("Customer_Id")]
        public DateTime Created_Date { get; set; }
        public virtual Customer Customer { get; set; }
        public ICollection<CartItem> CartItems { get; set; }
    }
}
