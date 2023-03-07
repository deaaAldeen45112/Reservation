using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class MenuItem
    {
        public MenuItem()
        {
            CartItems = new HashSet<CartItem>();
            MenuItemReviews = new HashSet<MenuItemReview>();
            OrderItems = new HashSet<OrderItem>();
        }

        public decimal Menu_Item_Id { get; set; }
        public string Menu_Item_Name { get; set; }
        public decimal Menu_Item_Price { get; set; }
        public decimal Menu_Item_Quantity { get; set; }
        public DateTime Menu_Item_Createdat { get; set; }
        public string Menu_Item_Content { get; set; }
        public decimal? Menu_Id { get; set; }
        public string Menu_Item_Image { get; set; }

        public virtual MenuCategory Menu { get; set; }
        public virtual MenuItemDiscount Menu_Item_Discount { get; set; }
        public virtual ICollection<CartItem> CartItems { get; set; }
        public virtual ICollection<MenuItemReview> MenuItemReviews { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
