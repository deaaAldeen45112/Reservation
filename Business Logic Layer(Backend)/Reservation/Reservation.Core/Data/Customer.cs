using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Reservation.Core.Data
{
    public class Customer
    {
        [Key]
        public int Customer_Id { get; set; }
        public int Register_Id { get; set; }
        [ForeignKey("RegisterId")]
        public virtual Register Register { get; set; }
           public ICollection<Cart> Carts { get; set; }
    }
}
