import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../../context/ShopContext'; // <-- الربط بالمخزن

const Header: React.FC = () => {
  // جلب البيانات من المخزن
  const { cartItems, wishlistItems } = useShop();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white border-b border-[#e5e5e5] py-5 font-outfit">
      <div className="container mx-auto px-4">
        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 1. Logo Section */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="logo-header text-3xl md:text-4xl font-playfair font-bold text-[#8f4a58] tracking-widest italic">
              Vineta.
            </Link>
          </div>
          
          {/* 2. Search Bar Section: exactly 1/3 width on desktop */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <form className="flex w-full shadow-sm border border-[#e5e5e5] rounded-full overflow-hidden focus-within:border-[#8f4a58] focus-within:ring-1 focus-within:ring-[#8f4a58] transition-all">
              <input 
                type="search" 
                placeholder="Search for products..." 
                className="w-full py-2.5 px-4 bg-gray-50 focus:bg-white outline-none text-sm text-gray-700 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[#8f4a58] text-white px-6 hover:bg-gray-900 transition-colors flex items-center justify-center"
              >
                <FaSearch />
              </button>
            </form>
          </div>
          
          {/* 3. User Actions Section: exactly gap-5 */}
          <div className="flex items-center gap-6">
            <Link to="/login" className="flex items-center text-gray-700 hover:text-[#8f4a58] transition group font-medium">
              <FaRegUser className="text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:block ml-2">Login</span>
            </Link>
            
            {/* Wishlist Link with Dynamic Badge */}
            <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-[#ff6f61] transition relative group font-medium">
              <FaHeart className="text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:block ml-2">Wishlist</span>
              <AnimatePresence>
                {wishlistItems.length > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-2.5 -right-3 md:left-3 md:right-auto bg-[#ff6f61] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-md">
                    {wishlistItems.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            
            {/* Cart Link with Dynamic Badge */}
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-[#8f4a58] transition relative group font-medium">
              <FaShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
              <span className="hidden md:block ml-2">Cart</span>
              <AnimatePresence>
                {cartItemsCount > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-2.5 -right-3 md:left-3 md:right-auto bg-[#8f4a58] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-md">
                    {cartItemsCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;