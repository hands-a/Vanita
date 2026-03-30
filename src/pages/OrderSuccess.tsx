import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const OrderSuccess: React.FC = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-outfit bg-[#fcfcfc] min-h-[80vh] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 p-10 md:p-16 text-center"
      >
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-[#38b000]/10 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <FaCheckCircle className="text-5xl text-[#38b000]" />
        </motion.div>

        <h1 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4">
          Thank You for Your Order!
        </h1>
        
        <p className="text-gray-500 text-lg mb-8">
          Your order has been placed successfully. We will send you an email confirmation with your order details shortly.
        </p>

        <div className="bg-[#f4f5f7] rounded-2xl p-6 mb-10 inline-block text-left">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Order Number</p>
          <p className="font-bold text-2xl text-gray-900">#{orderNumber}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/shop" 
            className="w-full sm:w-auto bg-[#8f4a58] text-white font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors duration-300"
          >
            Continue Shopping <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;