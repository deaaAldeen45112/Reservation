using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class Waiter
    {
        public Waiter()
        {
            Basicorders = new HashSet<Basicorder>();
        }

        public decimal Waiter_Id { get; set; }
        public decimal? Employee_Id { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual ICollection<Basicorder> Basicorders { get; set; }
    }
}
