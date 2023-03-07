using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
    public class CartMenuItemDto
    {

        public int Cart_Item_Id { get; set; }
        //public int Cart_Id { get; set; }
        public int Menu_Item_Id { get; set; }
        public float Cart_Item_Price { get; set; }
        public int Cart_Item_Quantity { get; set; }
        public string Menu_Item_Name { get; set; }
        public string Menu_Item_Image { get; set; }
 


    }
}
