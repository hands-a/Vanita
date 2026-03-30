// src/pages/Wishlist.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

const Wishlist: React.FC = () => {
  const { wishlistItems, toggleWishlist, addToCart } = useShop();

  return (
    <div className="w-full font-outfit text-gray-800 bg-[#fcfcfc] min-h-screen pb-24">
      <div className="bg-[#f4f5f7] py-12 px-4 mb-10">
        <div className="container mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Your Wishlist
          </motion.h1>
          <p className="text-gray-500 font-medium">You have {wishlistItems.length} items saved</p>
        </div>
      </div>

      <section className="container mx-auto px-4">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {wishlistItems.map((product) => (
                <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-gray-100 flex flex-col">
                  <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                    <Link to={`/product/${product.id}`} className="w-full h-full block z-10">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </Link>
                    <button onClick={() => toggleWishlist(product)} className="absolute top-4 right-4 w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors z-20">
                      <FaTrashAlt />
                    </button>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{product.category}</p>
                      <Link to={`/product/${product.id}`} className="font-playfair font-bold text-xl text-gray-900 hover:text-[#8f4a58] transition-colors duration-300 block truncate">{product.name}</Link>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[#8f4a58] font-bold text-xl">${product.price.toFixed(2)}</span>
                      <button onClick={() => addToCart(product, 1, product.colors[0])} className="text-sm font-bold text-[#8f4a58] flex items-center gap-2 hover:text-gray-900 transition-colors">
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-gray-100">
            <FaHeart className="text-6xl text-gray-200 mb-4" />
            <h2 className="font-playfair font-bold text-3xl text-gray-900 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">Save your favorite items here and they'll be waiting for you when you're ready.</p>
            <Link to="/shop" className="bg-[#8f4a58] text-white font-bold text-lg rounded-full px-10 py-4 hover:bg-gray-900 transition-colors">Start Browsing</Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;