using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class MenuItemReview
    {
        public decimal Menu_Item_Review_Id { get; set; }
        public decimal? Menu_Item_Id { get; set; }
        public string Menu_Item_Review_Title { get; set; }
        public decimal? Menu_Item_Rating { get; set; }
        public DateTime? Menu_Item_Review_Createdat { get; set; }
        public string Menu_Item_Content { get; set; }

        public virtual MenuItem MenuItem { get; set; }
    }
}
