using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
   public interface ICartRepository
    {

        public List<Cart> GetCartByRegisterId(decimal regId);


    }
}
