import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight, FaPaperPlane,
  FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcDinersClub, FaApplePay
} from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6 px-4 border-t border-[#e5e5e5]">
      <div className="container mx-auto">
        
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#e5e5e5] pb-6 mb-8">
          <Link to="/">
            <span className="text-3xl font-bold text-[#8f4a58]">Vineta.</span>
          </Link>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8f4a58] hover:text-white transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8f4a58] hover:text-white transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8f4a58] hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 border border-[#e5e5e5] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#8f4a58] hover:text-white transition-colors duration-300">
              <FaPinterestP />
            </a>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Business Contact (Updated to Egyptian Info) */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Business Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#8f4a58] mt-1 mr-3 shrink-0" />
                <p className="text-[#58595B]">90th Street, New Cairo, Cairo, Egypt</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-[#8f4a58] mr-3 shrink-0" />
                <p className="text-[#58595B]">+20 100 123 4567</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#8f4a58] mr-3 shrink-0" />
                <p className="text-[#58595B]">info@vineta.com.eg</p>
              </div>
              <a href="#" className="text-[#8f4a58] font-semibold flex items-center hover:underline mt-2">
                Get direction <FaArrowRight className="ml-2 text-xs" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Newsletter */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Subscribe Newsletter</h3>
            <p className="text-[#58595B] mb-4 leading-relaxed">
              We invite you to register to read the latest news, offers and events about our company.
            </p>
            <form className="relative flex items-center mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 pr-12 border border-[#e5e5e5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8f4a58] transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1 bg-[#8f4a58] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#ff6f61] transition-colors"
                aria-label="Subscribe"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
          
          {/* Column 3: About Us */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Contact Us</Link></li>
              <li><Link to="/shop" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Our Store</Link></li>
              <li><Link to="/careers" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Resources */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Privacy Policies</Link></li>
              <li><Link to="/terms" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/returns" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">FAQ's</Link></li>
              <li><Link to="/shipping" className="text-[#58595B] hover:text-[#ff6f61] transition-colors">Shipping</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Section: Copyright and Payments */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#e5e5e5]">
          <p className="text-[#58595B] mb-4 md:mb-0 text-sm">
            Copyright © 2026 by Abdullah Sayed <span className="font-medium text-gray-800">Vineta.</span> All Rights Reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex flex-wrap gap-3 text-3xl text-gray-400">
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-[#1a1f71] transition-colors" title="Visa"><FaCcVisa /></span>
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-[#eb001b] transition-colors" title="MasterCard"><FaCcMastercard /></span>
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-[#f48120] transition-colors" title="Discover"><FaCcDiscover /></span>
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-[#0079ac] transition-colors" title="Diners Club"><FaCcDinersClub /></span>
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-black transition-colors" title="Apple Pay"><FaApplePay /></span>
            <span className="border border-[#e5e5e5] rounded px-3 py-1 bg-white flex items-center justify-center hover:text-[#4285F4] transition-colors" title="Google Pay"><FaGooglePay /></span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;