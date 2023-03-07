using System;
using System.Collections.Generic;
namespace Reservation.Core.Data
{
    public partial class Payment
    {
        public decimal Payment_Id { get; set; }
        public decimal? Payment_Method_Id { get; set; }
        public decimal? Order_Id { get; set; }
        public decimal? Payment_Price { get; set; }
        public DateTime? Payment_Date { get; set; }
        public string Payment_Currncy { get; set; }
        public decimal? Credit_Id { get; set; }

        public virtual Credit Credit { get; set; }
        public virtual Basicorder Order { get; set; }
        public virtual PaymentMethod PaymentMethod { get; set; }
        public virtual Cash Cash { get; set; }
    }
}
