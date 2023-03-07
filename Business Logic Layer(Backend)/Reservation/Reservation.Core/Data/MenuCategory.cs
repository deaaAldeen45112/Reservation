using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class MenuCategory
    {
        public MenuCategory()
        {
            MenuItems = new HashSet<MenuItem>();
        }

        public decimal Menu_Category_Id { get; set; }
        public decimal? Menu_Category_Parent_Id { get; set; }
        public string Menu_Category_Name { get; set; }
        public string Menu_Category_Content { get; set; }
        public DateTime? Menu_Category_Createdate { get; set; }

        public virtual ICollection<MenuItem> MenuItems { get; set; }
    }
}
