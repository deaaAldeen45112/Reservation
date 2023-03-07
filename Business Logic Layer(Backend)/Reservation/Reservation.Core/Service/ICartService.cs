using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
   public interface ICartService
    {

        public List<Cart> GetCartByRegisterId(decimal regId);


    }
}
