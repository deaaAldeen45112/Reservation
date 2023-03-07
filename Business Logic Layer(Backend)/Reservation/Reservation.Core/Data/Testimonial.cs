using System;
using System.Collections.Generic;
namespace Reservation.Core.Data
{
    public partial class Testimonial
    {
        public decimal Testimonial_Id { get; set; }
        public string Testimonial_Message { get; set; }
        public decimal? Customer_Id { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
