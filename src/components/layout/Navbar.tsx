import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-[#e5e5e5] sticky top-0 w-full z-40 shadow-sm font-outfit">
      <div className="container mx-auto px-4">
        
        {/* Mobile Toggle Button */}
        <div className="md:hidden flex justify-between items-center py-4">
          <span className="font-bold text-[#8f4a58] tracking-widest uppercase">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-800 hover:text-[#8f4a58] transition-colors">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links (مباشرة بدون أي قوائم منسدلة) */}
        <div className="hidden md:flex flex-wrap justify-center py-4 gap-12 text-sm font-bold tracking-wider text-gray-700 uppercase">
          
          <Link to="/" className={`relative py-2 transition-colors duration-300 hover:text-[#8f4a58] ${isActive('/') ? 'text-[#8f4a58]' : ''}`}>
            Home
            {isActive('/') && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#8f4a58] rounded-t-md" />
            )}
          </Link>

          <Link to="/shop" className={`relative py-2 transition-colors duration-300 hover:text-[#8f4a58] ${isActive('/shop') ? 'text-[#8f4a58]' : ''}`}>
            Shop
            {isActive('/shop') && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#8f4a58] rounded-t-md" />
            )}
          </Link>

          <Link to="/about" className={`relative py-2 transition-colors duration-300 hover:text-[#8f4a58] ${isActive('/about') ? 'text-[#8f4a58]' : ''}`}>
            About Us
            {isActive('/about') && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#8f4a58] rounded-t-md" />
            )}
          </Link>

          <Link to="/contact" className={`relative py-2 transition-colors duration-300 hover:text-[#8f4a58] ${isActive('/contact') ? 'text-[#8f4a58]' : ''}`}>
            Contact
            {isActive('/contact') && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-4 left-0 w-full h-[3px] bg-[#8f4a58] rounded-t-md" />
            )}
          </Link>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner"
          >
            <div className="flex flex-col py-4 px-6 gap-2 text-sm font-bold text-gray-800 uppercase tracking-wider">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 border-b border-gray-50 ${isActive('/') ? 'text-[#8f4a58]' : 'hover:text-[#8f4a58]'}`}>
                Home
              </Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 border-b border-gray-50 ${isActive('/shop') ? 'text-[#8f4a58]' : 'hover:text-[#8f4a58]'}`}>
                Shop
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 border-b border-gray-50 ${isActive('/about') ? 'text-[#8f4a58]' : 'hover:text-[#8f4a58]'}`}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 ${isActive('/contact') ? 'text-[#8f4a58]' : 'hover:text-[#8f4a58]'}`}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;