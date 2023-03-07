using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
    public class TableDTO
    {
        public int? id { get; set; }
        public DateTime ?reservationFrom { get; set; }
        public DateTime ?reservationTo { get; set; }
        public int? chairs { get; set; }
    }
}
