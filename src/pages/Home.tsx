import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaUndoAlt, FaHeadset, FaShoppingBag, FaHeart, FaEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HomeSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
}

const sliderData: HomeSlide[] = [
  {
    id: 1,
    title: 'Every Room Elevated',
    subtitle: 'Exquisite designs for Cairo homes. Elegance and comfort redefined.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bgColor: '#ba9272',
  },
  {
    id: 2,
    title: 'Modern Alexandria Living',
    subtitle: 'Fresh, coastal styles for contemporary living spaces by the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bgColor: '#8f4a58',
  },
  {
    id: 3,
    title: 'Craftsmanship of Zamalek',
    subtitle: 'Artisanal furniture, blending historical art with modern functionality.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    bgColor: '#58595B',
  }
];

const servicesData = [
  { id: 1, title: 'Free Shipping', description: 'Enjoy free shipping on all orders over $50', icon: <FaTruck className="text-[#8f4a58] text-3xl" /> },
  { id: 2, title: 'Free Returns', description: 'Within 30 days for a full refund', icon: <FaUndoAlt className="text-[#8f4a58] text-3xl" /> },
  { id: 3, title: 'Support 24/7', description: 'Outstanding premium support', icon: <FaHeadset className="text-[#8f4a58] text-3xl" /> },
];

const topPicksData = [
  { id: 1, name: 'Nook Nightstand', price: 120.00, oldPrice: 150.00, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: 'Sale', badgeColor: 'bg-[#ff6f61]', colors: ['#b58e68', '#000000', '#784e39'] },
  { id: 2, name: 'Talco Coffee Table', price: 350.00, oldPrice: null, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: 'Trending', badgeColor: 'bg-[#a474ff]', colors: ['#4597a4', '#c3466d'] },
  { id: 3, name: 'Porcini Side Table', price: 180.00, oldPrice: null, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: null, badgeColor: '', colors: ['#e3d7c6', '#b58e68'] },
  { id: 4, name: 'Modern Lounge Chair', price: 420.00, oldPrice: 480.00, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', badge: '-15%', badgeColor: 'bg-[#8f4a58]', colors: ['#784e39', '#add8e6'] }
];

const curatedData = [
  { id: 1, title: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 2, title: 'Rugs', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 3, title: 'Decor', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 4, title: 'Pillows', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 5, title: 'Wall Art', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 6, title: 'Mirrors', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
];

const Home: React.FC = () => {
  return (
    <div className="w-full font-outfit text-gray-800">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative w-full h-auto md:h-[90vh] overflow-hidden bg-[#f4f4f4]">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full h-full">
              <div className="flex flex-col md:flex-row w-full h-full">
                
                {/* Left Side: Text */}
                <div 
                  className="w-full md:w-1/2 flex flex-col justify-center items-center text-white px-6 py-16 md:py-12 text-center h-[50vh] md:h-full relative" 
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }} key={`title_${slide.id}`} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-wide"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }} key={`p_${slide.id}`} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-md text-white/90 font-light px-4"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} key={`btn_${slide.id}`} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <Link to="/shop" className="inline-block bg-white text-gray-900 px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      Shop Collection
                    </Link>
                  </motion.div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-gray-200 h-[50vh] md:h-full">
                  <motion.img 
                    initial={{ scale: 1.05, opacity: 0 }} key={`img_${slide.id}`} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}
                    src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 text-center hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f9f5f3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-[#8f4a58] transition-all duration-500">
                  <div className="group-hover:text-white transition-colors duration-500 text-2xl md:text-3xl">
                    {service.icon}
                  </div>
                </div>
                <h2 className="font-playfair font-bold text-xl md:text-2xl pt-2 pb-2 md:pb-3 text-gray-900">{service.title}</h2>
                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 md:py-20 px-4 bg-[#fcfcfc]">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
              className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900"
            >
              Top Picks You'll Love
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-500 max-w-2xl mx-auto font-light text-base md:text-lg">
              Explore our most popular pieces that customers can't get enough of. Handpicked for your modern Egyptian home.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {topPicksData.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-gray-100 flex flex-col"
              >
                
                <div className="relative h-[280px] sm:h-[300px] lg:h-[340px] bg-[#f4f5f7] flex items-center justify-center p-6 overflow-hidden">
                  {product.badge && (
                    <span className={`absolute top-4 left-4 md:top-5 md:left-5 z-20 text-white text-[10px] md:text-[11px] uppercase tracking-wider font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                  
                  <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center z-10">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" 
                    />
                  </Link>

                  <div className="absolute top-4 right-4 md:top-5 md:right-5 flex flex-col gap-2 md:gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-20">
                    <button className="w-9 h-9 md:w-11 md:h-11 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-[#8f4a58] hover:text-white transition-colors duration-300" title="Add to Cart"><FaShoppingBag className="text-sm md:text-base" /></button>
                    <button className="w-9 h-9 md:w-11 md:h-11 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff6f61] hover:text-white transition-colors duration-300" title="Add to Wishlist"><FaHeart className="text-sm md:text-base" /></button>
                    <button className="w-9 h-9 md:w-11 md:h-11 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ba9272] hover:text-white transition-colors duration-300" title="Quick View"><FaEye className="text-sm md:text-base" /></button>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <Link to={`/product/${product.id}`} className="font-playfair font-bold text-lg md:text-xl text-gray-900 hover:text-[#8f4a58] transition-colors duration-300 block truncate">
                    {product.name}
                  </Link>
                  <div className="flex items-center pt-2 md:pt-3">
                    <span className="text-[#8f4a58] font-bold text-lg md:text-xl">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="text-gray-400 font-medium text-xs md:text-sm line-through ml-2 md:ml-3">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <div className="flex gap-2 pt-4 mt-auto">
                    {product.colors.map((color, i) => (
                      <span key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color }} title="Select color"></span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Categories Layout */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-2 rounded-3xl overflow-hidden relative group h-[250px] sm:h-[350px] lg:h-[450px] cursor-pointer shadow-sm"
            >
              <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Chairs Collection" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
                <Link to="/shop?category=chairs" className="font-playfair bg-white text-gray-900 px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-2xl font-bold hover:bg-[#8f4a58] hover:text-white transition-colors duration-400 transform hover:scale-105 shadow-xl">
                  Chairs Collection
                </Link>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-3xl overflow-hidden relative group h-[200px] lg:min-h-[210px] cursor-pointer shadow-sm"
              >
                <img src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tables" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
                  <Link to="/shop?category=tables" className="font-playfair bg-white text-gray-900 px-8 py-2 md:px-10 md:py-3 rounded-full text-lg md:text-xl font-bold hover:bg-[#ba9272] hover:text-white transition-colors duration-400 transform hover:scale-105 shadow-xl">
                    Tables
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                className="rounded-3xl overflow-hidden relative group h-[200px] lg:min-h-[210px] cursor-pointer shadow-sm"
              >
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Decorations" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
                  <Link to="/shop?category=decor" className="font-playfair bg-white text-gray-900 px-8 py-2 md:px-10 md:py-3 rounded-full text-lg md:text-xl font-bold hover:bg-[#ff6f61] hover:text-white transition-colors duration-400 transform hover:scale-105 shadow-xl">
                    Decorations
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Just for You */}
      <section className="py-12 md:py-20 px-4 bg-[#fcfcfc]">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-gray-900"
            >
              Curated Just for You
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-500 font-light text-base md:text-lg">
              Discover a selection of timeless designs and trends that match your style.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {curatedData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <Link to={`/shop?category=${item.title.toLowerCase()}`}>
                  {/* Aspect-square ensures perfect circles on all screen sizes */}
                  <div className="rounded-full overflow-hidden mb-4 md:mb-6 border-[4px] md:border-[6px] border-transparent group-hover:border-[#ba9272]/20 transition-all duration-500 shadow-sm group-hover:shadow-xl w-full aspect-square max-w-[180px] mx-auto">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <p className="font-playfair font-bold text-lg md:text-xl text-gray-800 group-hover:text-[#8f4a58] transition-colors">{item.title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;