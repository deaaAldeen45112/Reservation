using System;
using System.Collections.Generic;

namespace Reservation.Core.Data
{
    public partial class Invoic
    {
        public decimal Invoic_Id { get; set; }
        public decimal? Payment_Id { get; set; }
        public DateTime? Invoic_Date { get; set; }
        public string Invoic_Details { get; set; }

        public virtual Payment InvoicNavigation { get; set; }
    }
}
