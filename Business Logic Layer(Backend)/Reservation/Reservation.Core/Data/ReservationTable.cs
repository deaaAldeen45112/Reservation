using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Data
{
    public class ReservationTable
    {
        public decimal Reservation_Id { get; set; }
        public decimal? Customer_Id { get; set; }
        public decimal? Table_Id { get; set; }
        public DateTime? Reservation_From { get; set; }
        public DateTime? Reservation_To { get; set; }
        public string Res_Status { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Table Table { get; set; }
    }
}
