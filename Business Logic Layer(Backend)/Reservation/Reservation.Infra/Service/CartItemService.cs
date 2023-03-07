using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class CartItemService:ICartItemService
    {
        private readonly ICartItemRepository _cartItemRepository;
        public CartItemService(ICartItemRepository cartItemRepository)
        {
            _cartItemRepository = cartItemRepository;
        }

        public bool AddToCartItem(CartItem cartItem)
        {
            return _cartItemRepository.AddToCartItem(cartItem);
        }

        public bool DeleteAllCartItemByCartId(decimal cartId)
        {
            return _cartItemRepository.DeleteAllCartItemByCartId(cartId);
        }

  
        public bool DeleteFromCartItemByCartItemId(decimal cartItemId)
        {
            return _cartItemRepository.DeleteFromCartItemByCartItemId(cartItemId);
        }

        public List<CartMenuItemDto> GetCartItemByCartId(decimal cartId)
        {
           return  _cartItemRepository.GetCartItemByCartId(cartId);
        }

        public List<CartItem> GetCartItemByName(CartItem cartItem, string menuItemName)
        {
            return _cartItemRepository.GetCartItemByName(cartItem, menuItemName);
        }

        public List<CartItem> GetCartItemByProductId(CartItem cartItem)
        {
            return _cartItemRepository.GetCartItemByProductId(cartItem);
        }

        public List<CartItem> GetCartItems(CartItem cartItem)
        {
            return _cartItemRepository.GetCartItems(cartItem);
        }

        public List<CartItem> GetExpensiveCartItem(CartItem cartItem)
        {
            return _cartItemRepository.GetExpensiveCartItem(cartItem);
        }
    }
}
