using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
   public  class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        public CartService(ICartRepository cartItemRepository)
        {
            _cartRepository = cartItemRepository;
        }

        public List<Cart> GetCartByRegisterId(decimal regId)
        {
          return _cartRepository.GetCartByRegisterId(regId);
        }
    }
}
