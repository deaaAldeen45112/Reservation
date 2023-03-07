using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface ICartItemService
    {
        public bool DeleteFromCartItemByCartItemId(decimal cartItemId);
        public bool DeleteAllCartItemByCartId(decimal cartId);
        public List<CartMenuItemDto> GetCartItemByCartId(decimal cartId);

        public bool AddToCartItem(CartItem cartItem);
         public List<CartItem> GetCartItems(CartItem cartItem);
        public List<CartItem> GetExpensiveCartItem(CartItem cartItem);
        public List<CartItem> GetCartItemByName(CartItem cartItem, string menuItemName);
        public List<CartItem> GetCartItemByProductId(CartItem cartItem);
    }
}
