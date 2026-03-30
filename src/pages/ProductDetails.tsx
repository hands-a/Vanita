import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaChevronRight, FaStar, FaMinus, FaPlus, FaTruck, FaUndoAlt, FaShieldAlt } from 'react-icons/fa';
import { products as allProducts } from '../data/products';

import { useShop } from '../context/ShopContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === Number(id));

  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      setQuantity(1);
      setActiveTab('description');
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-outfit text-center px-4">
        <h1 className="font-playfair text-6xl text-gray-900 font-bold mb-4">404</h1>
        <p className="text-xl text-gray-500 mb-8">Oops! The product you are looking for does not exist.</p>
        <button onClick={() => navigate('/shop')} className="bg-[#8f4a58] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleDecrease = () => { if (quantity > 1) setQuantity(quantity - 1); };
  const handleIncrease = () => { setQuantity(quantity + 1); };

  return (
    <div className="w-full font-outfit text-gray-800 bg-white min-h-screen pb-20">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="bg-[#f4f5f7] py-6 px-4 mb-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider font-medium">
            <Link to="/" className="hover:text-[#8f4a58] transition-colors">Home</Link><FaChevronRight className="text-[10px]" />
            <Link to="/shop" className="hover:text-[#8f4a58] transition-colors">Shop</Link><FaChevronRight className="text-[10px]" />
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-[#8f4a58] transition-colors">{product.category}</Link><FaChevronRight className="text-[10px]" />
            <span className="text-gray-900 truncate font-bold">{product.name}</span>
          </motion.div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:sticky lg:top-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative group border border-gray-100">
              {product.badge && <span className={`absolute top-6 left-6 z-10 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${product.badgeColor}`}>{product.badge}</span>}
              <AnimatePresence mode="wait">
                <motion.img key={mainImage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }} src={mainImage} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 cursor-zoom-in" />
              </AnimatePresence>
            </motion.div>

            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {product.images.map((img, idx) => (
                <div key={idx} onClick={() => setMainImage(img)} className={`aspect-square w-24 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer border-2 transition-all duration-300 ${mainImage === img ? 'border-[#8f4a58] shadow-md' : 'border-transparent hover:border-gray-300'}`}>
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[#8f4a58] font-bold text-sm tracking-widest uppercase mb-3">{product.category}</p>
              <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
                <div className="flex text-[#ba9272] text-lg"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <span className="text-gray-500 font-medium">{product.rating} Rating ({product.reviewsCount} Reviews)</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-end gap-5 mb-8">
              <span className="font-playfair font-bold text-5xl text-gray-900">${product.price.toFixed(2)}</span>
              {product.oldPrice && <span className="text-gray-400 text-2xl line-through font-medium mb-1">${product.oldPrice.toFixed(2)}</span>}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-500 font-light leading-relaxed mb-10 text-lg">
              {product.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Select Color</h3>
                <span className="text-sm font-medium text-gray-500">Available in {product.colors.length} options</span>
              </div>
              <div className="flex gap-4">
                {product.colors.map((colorHex, idx) => (
                  <button key={idx} onClick={() => setSelectedColor(colorHex)} className={`w-12 h-12 rounded-full border-[3px] shadow-sm transition-all duration-300 relative flex items-center justify-center ${selectedColor === colorHex ? 'border-[#8f4a58] scale-110 ring-4 ring-[#8f4a58]/10' : 'border-transparent hover:scale-110'}`} style={{ backgroundColor: colorHex }} title="Color option">
                    <span className="w-10 h-10 rounded-full border border-black/10 absolute"></span>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center justify-between border-2 border-gray-200 rounded-full px-6 py-4 w-full sm:w-1/3 hover:border-gray-300 transition-colors bg-white">
                <button onClick={handleDecrease} className="text-gray-400 hover:text-[#8f4a58] transition-colors p-2"><FaMinus /></button>
                <span className="font-bold text-2xl text-gray-900 w-10 text-center">{quantity}</span>
                <button onClick={handleIncrease} className="text-gray-400 hover:text-[#8f4a58] transition-colors p-2"><FaPlus /></button>
              </div>
              
              {/* 3. تفعيل زرار الإضافة للسلة */}
              <button 
                onClick={() => addToCart(product, quantity, selectedColor)} 
                className="flex-1 bg-[#8f4a58] text-white font-bold text-lg rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaShoppingCart className="text-xl" /> Add to Cart
              </button>
              
              {/* 4. تفعيل زرار المفضلة */}
              <button 
                onClick={() => toggleWishlist(product)} 
                className={`w-16 h-16 sm:w-auto sm:h-auto sm:px-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${isInWishlist(product.id) ? 'border-[#ff6f61] text-[#ff6f61] bg-[#ff6f61]/10' : 'border-gray-200 text-gray-400 hover:border-[#ff6f61] hover:text-[#ff6f61]'}`}
              >
                <FaHeart className="text-xl" />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-[#f9fafa] p-6 rounded-3xl text-sm font-medium text-gray-600 flex flex-col gap-4 border border-gray-100">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-400 uppercase tracking-wider text-xs">SKU</span><span className="text-gray-900 font-bold">{product.sku}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-400 uppercase tracking-wider text-xs">Availability</span>
                <span className="text-[#38b000] font-bold flex items-center gap-2"><div className="w-2 h-2 bg-[#38b000] rounded-full animate-pulse"></div> In Stock</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 uppercase tracking-wider text-xs">Secure Payment</span>
                <div className="flex gap-2"><FaShieldAlt className="text-gray-400 text-lg" /></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-12 pt-10 border-t border-gray-100">
              <div className="flex gap-8 mb-8">
                <button onClick={() => setActiveTab('description')} className={`pb-2 text-xl font-playfair font-bold transition-all duration-300 relative ${activeTab === 'description' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                  Features{activeTab === 'description' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8f4a58]"></span>}
                </button>
                <button onClick={() => setActiveTab('shipping')} className={`pb-2 text-xl font-playfair font-bold transition-all duration-300 relative ${activeTab === 'shipping' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                  Shipping{activeTab === 'shipping' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8f4a58]"></span>}
                </button>
              </div>

              {activeTab === 'description' ? (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600 text-lg font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ba9272]"></div>{feature}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8f4a58]/10 rounded-full flex items-center justify-center shrink-0"><FaTruck className="text-xl text-[#8f4a58]" /></div>
                    <div><h4 className="font-bold text-gray-900 mb-1">Fast Delivery to Egypt</h4><p className="text-gray-500 font-light text-sm">Cairo & Giza: 1-2 Days. Other Governorates: 3-5 Days.</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8f4a58]/10 rounded-full flex items-center justify-center shrink-0"><FaUndoAlt className="text-xl text-[#8f4a58]" /></div>
                    <div><h4 className="font-bold text-gray-900 mb-1">30-Day Easy Returns</h4><p className="text-gray-500 font-light text-sm">Return your item in its original condition for a full refund.</p></div>
                  </div>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;