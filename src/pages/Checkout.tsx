import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaLock, FaCreditCard, FaPaypal, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

import { useShop } from '../context/ShopContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useShop(); 
  
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'cod'>('card');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 25) : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return; 
    clearCart(); // تفريغ السلة
    navigate('/success'); 
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 font-outfit">
        <h2 className="font-playfair text-4xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">You need to add items to your cart before checking out.</p>
        <Link to="/shop" className="bg-[#8f4a58] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full font-outfit text-gray-800 bg-[#fcfcfc] min-h-screen pb-24">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <div className="bg-[#f4f5f7] py-10 px-4 mb-10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider font-medium justify-center">
            <Link to="/cart" className="hover:text-[#8f4a58] transition-colors">Cart</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-900 font-bold">Checkout</span>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-400">Order Complete</span>
          </motion.div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-2/3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm mb-8">
                <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#8f4a58] text-white flex items-center justify-center text-sm font-outfit">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" placeholder="you@example.com" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" placeholder="+20 100 000 0000" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm mb-8">
                <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#8f4a58] text-white flex items-center justify-center text-sm font-outfit">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                  <input type="text" placeholder="House number and street name" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Governorate *</label>
                    <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors bg-white">
                      <option>Cairo</option><option>Giza</option><option>Alexandria</option><option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#8f4a58] text-white flex items-center justify-center text-sm font-outfit">3</span>
                  Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button onClick={() => setPaymentMethod('card')} className={`py-4 px-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === 'card' ? 'border-[#8f4a58] bg-[#8f4a58]/5 text-[#8f4a58]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}><FaCreditCard className="text-2xl" /><span className="font-bold text-sm">Credit Card</span></button>
                  <button onClick={() => setPaymentMethod('paypal')} className={`py-4 px-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === 'paypal' ? 'border-[#8f4a58] bg-[#8f4a58]/5 text-[#8f4a58]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}><FaPaypal className="text-2xl" /><span className="font-bold text-sm">PayPal</span></button>
                  <button onClick={() => setPaymentMethod('cod')} className={`py-4 px-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === 'cod' ? 'border-[#8f4a58] bg-[#8f4a58]/5 text-[#8f4a58]' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}><FaMoneyBillWave className="text-2xl" /><span className="font-bold text-sm">Cash on Delivery</span></button>
                </div>

                <AnimatePresence mode="wait">
                  {paymentMethod === 'card' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input type="text" placeholder="0000 0000 0000 0000" className="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#8f4a58]" />
                          <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div><label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label><input type="text" placeholder="MM/YY" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58]" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-2">CVC</label><input type="text" placeholder="123" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8f4a58]" /></div>
                      </div>
                    </motion.div>
                  )}
                  {paymentMethod === 'paypal' && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><p className="text-gray-500 bg-gray-50 p-6 rounded-2xl text-center">Redirecting to PayPal...</p></motion.div>}
                  {paymentMethod === 'cod' && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><p className="text-gray-500 bg-gray-50 p-6 rounded-2xl text-center">Pay with cash when delivered.</p></motion.div>}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.04)] rounded-3xl p-8 lg:sticky lg:top-8">
              <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0 border border-gray-100 relative">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-2 -right-2 bg-gray-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">{item.quantity}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">Color: <span className="w-2 h-2 rounded-full border border-gray-300 inline-block" style={{ backgroundColor: item.selectedColor }}></span></p>
                    </div>
                    <div className="font-bold text-gray-900 text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4 mb-6">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Shipping</span>{shipping === 0 ? <span className="font-bold text-[#38b000]">Free</span> : <span className="font-bold text-gray-900">${shipping.toFixed(2)}</span>}</div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-end"><span className="font-bold text-lg text-gray-900">Total</span><span className="font-playfair font-bold text-4xl text-[#8f4a58]">${total.toFixed(2)}</span></div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-[#8f4a58] text-white font-bold text-lg rounded-full py-4 flex items-center justify-center gap-3 hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-4"
              >
                <FaLock /> Place Order
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-6 text-center leading-relaxed">
                <FaShieldAlt className="text-lg shrink-0" /> 
                <span>Your personal data will be used to process your order securely.</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Checkout;