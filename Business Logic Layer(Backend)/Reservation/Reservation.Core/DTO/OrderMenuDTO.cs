using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
    public class OrderMenuDTO
    {
        public decimal? Order_Item_Price { get; set; }
        public string Menu_Item_Content { get; set; }
        public string Menu_Item_Name { get; set; }
    }
}
