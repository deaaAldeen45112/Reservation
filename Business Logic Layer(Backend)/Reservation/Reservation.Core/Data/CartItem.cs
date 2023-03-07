using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Data
{
    public class CartItem
    {
        public int Cart_Item_Id { get; set; }
        public int Cart_Id { get; set; }
        public int Menu_Item_Id { get; set; }
        public float Cart_Item_Price { get; set; }
        public int Cart_Item_Quantity { get; set; }
        public DateTime Add_Date { get; set; }
        public ICollection<Cart> Cart { set; get; }
    }
}
