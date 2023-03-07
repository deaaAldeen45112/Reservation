using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class MenuItemDiscount
    {
        public decimal Discount_Id { get; set; }
        public decimal? Menu_Item_Id { get; set; }
        public decimal? Discount_Rate { get; set; }
        public DateTime? Discount_Start_Date { get; set; }
        public DateTime? Discount_End_Date { get; set; }

        public virtual MenuItem MenuItem { get; set; }
    }
}
