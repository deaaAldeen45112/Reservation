using System;
using System.Collections.Generic;
namespace Reservation.Core.Data
{
    public partial class Cash
    {
        public decimal Cash_Id { get; set; }
        public decimal? Payment_Id { get; set; }

        public virtual Payment Payment { get; set; }
    }
}
