using System;
using System.Collections.Generic;


namespace Reservation.Core.Data
{
    public partial class OrderItem
    {
        public decimal Order_Item_Id { get; set; }
        public decimal Menu_Item_Id { get; set; }
        public decimal Order_Id { get; set; }
        public DateTime? Order_Item_Createdat { get; set; }
        public decimal? Order_Item_Price { get; set; }
        public decimal? Order_Item_Quantity { get; set; }

        public virtual MenuItem Menu_Item { get; set; }
        public virtual Basicorder Order { get; set; }
    }
}
