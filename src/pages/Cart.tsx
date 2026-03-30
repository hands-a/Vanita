import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrashAlt, FaMinus, FaPlus, FaArrowRight, FaShieldAlt, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';

import { products } from '../data/products';


const initialCartItems = [
  { 
    ...products[0], 
    cartItemId: 'c1',
    quantity: 1, 
    selectedColor: products[0].colors[0] 
  },
  { 
    ...products[3], 
    cartItemId: 'c2',
    quantity: 2, 
    selectedColor: products[3].colors[1] 
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');

  // --- Cart Logic ---
  const handleIncrease = (cartItemId: string) => {
    setCartItems(prev => prev.map(item => 
      item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (cartItemId: string) => {
    setCartItems(prev => prev.map(item => 
      item.cartItemId === cartItemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemove = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  // --- Calculations ---
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 25) : 0; // Free shipping over $500
  const total = subtotal + shipping;

  return (
    <div className="w-full font-outfit text-gray-800 bg-[#fcfcfc] min-h-screen pb-24">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      {/* Page Header */}
      <div className="bg-[#f4f5f7] py-12 px-4 mb-10">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4"
          >
            Shopping Cart
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-500 font-medium">
            {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in your cart
          </motion.p>
        </div>
      </div>

      <section className="container mx-auto px-4">
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            
            <div className="w-full lg:w-2/3">
              
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm uppercase tracking-wider text-gray-400 font-bold mb-6">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              <div className="space-y-6">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.cartItemId}
                      layout
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white p-4 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-none md:border-b md:border-gray-100 md:pb-6"
                    >
                      <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
                        <Link to={`/product/${item.id}`} className="w-24 h-24 bg-[#f4f5f7] rounded-xl overflow-hidden shrink-0 border border-gray-100">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                        </Link>
                        <div className="flex flex-col">
                          <Link to={`/product/${item.id}`} className="font-playfair font-bold text-xl text-gray-900 hover:text-[#8f4a58] transition-colors mb-1">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                            Color: <span className="w-3 h-3 rounded-full border border-gray-300 inline-block" style={{ backgroundColor: item.selectedColor }}></span>
                          </p>
                          <button 
                            onClick={() => handleRemove(item.cartItemId)}
                            className="text-sm text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors w-fit"
                          >
                            <FaTrashAlt className="text-xs" /> Remove
                          </button>
                        </div>
                      </div>

                      <div className="hidden md:block col-span-2 text-center font-bold text-gray-900 text-lg">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden font-bold text-gray-500">Quantity:</span>
                        <div className="flex items-center justify-between border-2 border-gray-200 rounded-full px-3 py-2 w-28 bg-white">
                          <button onClick={() => handleDecrease(item.cartItemId)} className="text-gray-400 hover:text-[#8f4a58] transition-colors"><FaMinus className="text-xs" /></button>
                          <span className="font-bold text-gray-900">{item.quantity}</span>
                          <button onClick={() => handleIncrease(item.cartItemId)} className="text-gray-400 hover:text-[#8f4a58] transition-colors"><FaPlus className="text-xs" /></button>
                        </div>
                      </div>

                      {/* Item Subtotal */}
                      <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end">
                        <span className="md:hidden font-bold text-gray-500">Total:</span>
                        <span className="font-playfair font-bold text-xl text-[#8f4a58]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link to="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#8f4a58] font-bold transition-colors">
                  <FaArrowLeft /> Continue Shopping
                </Link>
              </div>

            </div>

            <div className="w-full lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.04)] rounded-3xl p-8 lg:sticky lg:top-8"
              >
                <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    {shipping === 0 ? (
                      <span className="font-bold text-[#38b000]">Free</span>
                    ) : (
                      <span className="font-bold text-gray-900">${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-bold text-gray-900">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg text-gray-900">Total</span>
                    <span className="font-playfair font-bold text-4xl text-[#8f4a58]">${total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 text-right mt-1">Including VAT</p>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-bold text-gray-700 mb-2">Gift Card or Discount Code</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code" 
                      className="w-full border-2 border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors"
                    />
                    <button className="bg-gray-900 text-white font-bold px-6 rounded-full hover:bg-[#8f4a58] transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <Link 
                  to="/checkout" 
                  className="w-full bg-[#8f4a58] text-white font-bold text-lg rounded-full py-4 flex items-center justify-center gap-3 hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-4"
                >
                  Proceed to Checkout <FaArrowRight />
                </Link>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-6">
                  <FaShieldAlt /> <span>Secure SSL Encrypted Checkout</span>
                </div>

              </motion.div>
            </div>

          </div>
        ) : (
          /* EMPTY CART STATE */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="w-32 h-32 bg-[#f4f5f7] rounded-full flex items-center justify-center mb-6">
              <FaShoppingBag className="text-6xl text-gray-300" />
            </div>
            <h2 className="font-playfair font-bold text-3xl text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Discover our beautiful collection and find something you love.</p>
            <Link to="/shop" className="bg-[#8f4a58] text-white font-bold text-lg rounded-full px-10 py-4 hover:bg-gray-900 transition-colors duration-300">
              Start Shopping
            </Link>
          </motion.div>
        )}

      </section>

    </div>
  );
};

export default Cart;