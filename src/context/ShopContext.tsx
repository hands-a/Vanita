// src/context/ShopContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Using type for Vite/TypeScript compatibility
import type { Product } from '../data/products'; 

export interface CartItem extends Product {
  cartItemId: string; 
  quantity: number;
  selectedColor: string;
}

interface ShopContextType {
  cartItems: CartItem[];
  wishlistItems: Product[];
  addToCart: (product: Product, quantity: number, color: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, amount: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  clearCart: () => void; // 👈 التعديل الأول: ضفنا اسم الدالة هنا
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Cart Functions
  const addToCart = (product: Product, quantity: number, color: string) => {
    const cartItemId = `${product.id}-${color}`;
    setCartItems(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, cartItemId, quantity, selectedColor: color }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, amount: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  // 👈 التعديل التاني: برمجنا دالة تفريغ السلة
  const clearCart = () => {
    setCartItems([]);
  };

  // Wishlist Functions
  const toggleWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    // 👈 التعديل التالت: مررنا clearCart هنا عشان باقي الموقع يشوفها
    <ShopContext.Provider value={{ cartItems, wishlistItems, addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist, isInWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};