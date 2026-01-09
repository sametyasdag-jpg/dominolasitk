'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('1001carsi_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('1001carsi_cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product, quantity = 1, campaign = null) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // Eğer kampanya ile ekliyorsa, kampanya bilgisini güncelle
        return prevCart.map(item =>
          item.id === product.id
            ? { 
                ...item, 
                quantity: campaign ? quantity : item.quantity + quantity,
                campaign: campaign || item.campaign 
              }
            : item
        );
      }
      return [...prevCart, { ...product, quantity, campaign }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          // Eğer kampanya varsa ve miktar 4'ün altına düşerse kampanyayı kaldır
          const newCampaign = (item.campaign && quantity < 4) ? null : item.campaign;
          return { ...item, quantity, campaign: newCampaign };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Ürün fiyatını kampanya dahil hesapla
  const getItemPrice = (item) => {
    if (item.campaign === '4al3ode' && item.quantity >= 4) {
      // 4 al 3 öde: Her 4 ürün için 3 ürün fiyatı
      const sets = Math.floor(item.quantity / 4);
      const remainder = item.quantity % 4;
      return (sets * 3 * item.price) + (remainder * item.price);
    }
    return item.price * item.quantity;
  };

  // Kampanya indirimi hesapla
  const getItemDiscount = (item) => {
    if (item.campaign === '4al3ode' && item.quantity >= 4) {
      const sets = Math.floor(item.quantity / 4);
      return sets * item.price; // Her set için 1 ürün bedava
    }
    return 0;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + getItemPrice(item), 0);
  };

  // Kampanyasız toplam (karşılaştırma için)
  const getCartTotalWithoutCampaign = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Toplam kampanya indirimi
  const getTotalCampaignDiscount = () => {
    return cart.reduce((total, item) => total + getItemDiscount(item), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const getCartItem = (productId) => {
    return cart.find(item => item.id === productId);
  };

  // Kampanyayı kaldır
  const removeCampaign = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, campaign: null } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartTotalWithoutCampaign,
        getTotalCampaignDiscount,
        getCartCount,
        isInCart,
        getCartItem,
        getItemPrice,
        getItemDiscount,
        removeCampaign,
        isLoaded
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
