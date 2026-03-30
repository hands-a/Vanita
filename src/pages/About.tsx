import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight, FaGem, FaLeaf, FaTruck, FaHeadset } from 'react-icons/fa';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full font-outfit text-gray-800 bg-[#fcfcfc] min-h-screen pb-20">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <div className="bg-[#f4f5f7] py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            About Our Brand
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-2 text-sm text-gray-500 uppercase tracking-wider font-medium">
            <Link to="/" className="hover:text-[#8f4a58] transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#8f4a58] font-bold">About Us</span>
          </motion.div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Furniture Workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#f4f5f7] rounded-full z-0 hidden md:block"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#8f4a58]/10 rounded-full z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-[#8f4a58] font-bold text-sm tracking-widest uppercase mb-3">Our Story</h2>
            <h3 className="font-playfair font-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              Crafting Comfort & <br /> Elegance Since 2020.
            </h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-6">
              We started with a simple idea: furniture should be both beautiful and functional. Our journey began in a small workshop, fueled by a passion for modern design and premium craftsmanship.
            </p>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
              Today, we are proud to deliver high-quality, sustainable furniture pieces that transform houses into warm, inviting homes. Every piece is designed with you in mind.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
              <div>
                <h4 className="font-playfair font-bold text-4xl text-[#8f4a58] mb-2">5+</h4>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="font-playfair font-bold text-4xl text-[#8f4a58] mb-2">1.2k</h4>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-playfair font-bold text-4xl text-[#8f4a58] mb-2">100%</h4>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f4f5f7]">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#8f4a58] font-bold text-sm tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="font-playfair font-bold text-4xl text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-500 font-light">We believe in providing the best experience for our customers from the moment they browse our store to the delivery of their furniture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-[#8f4a58]/5 text-[#8f4a58] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                <FaGem />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Premium Quality</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">We use only the finest materials to ensure our furniture lasts for generations.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-[#8f4a58]/5 text-[#8f4a58] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                <FaLeaf />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Eco-Friendly</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">Our materials are sourced sustainably to protect the environment.</p>
            </motion.div>

            {/* Value 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-[#8f4a58]/5 text-[#8f4a58] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                <FaTruck />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Fast Delivery</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">We guarantee safe and fast delivery right to your doorstep.</p>
            </motion.div>

            {/* Value 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="w-16 h-16 bg-[#8f4a58]/5 text-[#8f4a58] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                <FaHeadset />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">24/7 Support</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">Our customer service team is always ready to assist you anytime.</p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;