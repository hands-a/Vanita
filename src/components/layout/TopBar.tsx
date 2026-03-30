import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaSnapchat } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#8f4a58] h-10 w-full font-outfit hidden sm:block">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        
        {/* Left side: Social media links */}
        <div className="top-bar-left">
          <ul className="flex gap-3">
            <li className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e87166] transition-colors duration-300"> 
              <a href="#" aria-label="Facebook"><FaFacebookF className="text-white text-xs" /></a>
            </li>
            <li className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6f61] transition-colors duration-300"> 
              <a href="#" aria-label="Instagram"><FaInstagram className="text-white text-xs" /></a>
            </li>
            <li className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6f61] transition-colors duration-300"> 
              <a href="#" aria-label="Twitter"><FaTwitter className="text-white text-xs" /></a>
            </li>
            <li className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6f61] transition-colors duration-300"> 
              <a href="#" aria-label="Snapchat"><FaSnapchat className="text-white text-xs" /></a>
            </li>
          </ul>
        </div>
        
        {/* Middle: Store policies */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 text-xs font-medium tracking-wide">
          <p>Free Shipping on Orders $50+</p>
          <p>30-Day Money Back Guarantee</p>
        </div>
        
        {/* Right side: Language and Currency selectors */}
        <div className="flex items-center gap-5 text-white/90 text-xs font-medium">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
            English <FaChevronDown className="text-[10px]" />
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
            USD $ <FaChevronDown className="text-[10px]" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default TopBar;