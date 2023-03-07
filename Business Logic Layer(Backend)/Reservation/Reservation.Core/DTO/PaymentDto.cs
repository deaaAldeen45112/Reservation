using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.DTO
{
  public class PaymentDto
  {
    public decimal Count { set; get; }
    public DateTime Date { set; get; }
    public decimal Sum { set; get; }
  }
}
