import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaHeart, FaEye, FaFilter, FaTh, FaListUl, FaChevronRight, FaTimes } from 'react-icons/fa';
import { products as shopProducts } from '../data/products';

import { useShop } from '../context/ShopContext';

const categories = ['All', 'Chairs', 'Tables', 'Lighting', 'Decor', 'Rugs', 'Sofas'];
const dynamicColorsList = Array.from(new Set(shopProducts.flatMap(product => product.colors)));

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1500);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('default');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const filteredProducts = useMemo(() => {
    let result = [...shopProducts]; 
    if (activeCategory !== 'All') result = result.filter(p => p.category === activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    if (activeColor) result = result.filter(p => p.colors.includes(activeColor));

    switch (sortOption) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name-asc': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }
    return result;
  }, [activeCategory, maxPrice, activeColor, sortOption]);

  const clearFilters = () => {
    setActiveCategory('All');
    setMaxPrice(1500);
    setActiveColor(null);
    setSortOption('default');
  };

  const hasActiveFilters = activeCategory !== 'All' || maxPrice < 1500 || activeColor !== null;

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
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Our Collection
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-2 text-sm text-gray-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#8f4a58] transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#8f4a58] font-medium">Shop</span>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          
          <aside className="w-full lg:w-1/4">
            <div className="lg:hidden mb-6 flex items-center justify-between font-bold text-lg text-gray-900 cursor-pointer bg-white p-4 rounded-xl border border-gray-100 shadow-sm" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              <div className="flex items-center gap-2"><FaFilter /> <span>Filters</span></div>
              <FaChevronRight className={`transition-transform ${isMobileFilterOpen ? 'rotate-90' : ''}`} />
            </div>

            <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block space-y-10 sticky top-10 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-lg lg:shadow-none border border-gray-100 lg:border-none z-20`}>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="w-full py-2 flex items-center justify-center gap-2 text-sm font-bold text-[#8f4a58] bg-[#8f4a58]/10 rounded-full hover:bg-[#8f4a58] hover:text-white transition-colors">
                  <FaTimes /> Clear All Filters
                </button>
              )}

              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-5 border-b pb-2">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((cat, idx) => {
                    const count = cat === 'All' ? shopProducts.length : shopProducts.filter(p => p.category === cat).length;
                    return (
                      <li key={idx}>
                        <button onClick={() => setActiveCategory(cat)} className={`text-base transition-colors duration-300 w-full text-left flex justify-between items-center ${activeCategory === cat ? 'text-[#8f4a58] font-bold' : 'text-gray-500 hover:text-[#8f4a58]'}`}>
                          {cat}
                          <span className={`text-xs px-2 py-1 rounded-full font-normal ${activeCategory === cat ? 'bg-[#8f4a58] text-white' : 'bg-gray-100 text-gray-400'}`}>{count}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-5 border-b pb-2">Filter by Price</h3>
                <input type="range" min="0" max="1500" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#8f4a58] cursor-pointer" />
                <div className="flex justify-between text-sm text-gray-500 mt-3 font-medium">
                  <span>$0</span><span className="text-[#8f4a58] font-bold">Up to ${maxPrice}</span>
                </div>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-5 border-b pb-2">Colors</h3>
                <div className="flex flex-wrap gap-3">
                  {dynamicColorsList.map((color, idx) => (
                    <button key={idx} onClick={() => setActiveColor(activeColor === color ? null : color)} className={`w-8 h-8 rounded-full border-2 shadow-sm transition-transform relative flex items-center justify-center ${activeColor === color ? 'border-[#8f4a58] scale-125' : 'border-gray-200 hover:scale-110'}`} style={{ backgroundColor: color }} title={`Select color`}>
                      <span className="w-6 h-6 rounded-full border border-black/10 absolute"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-8 gap-4">
              <p className="text-gray-500 font-light text-sm">Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> results</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Sort by:</span>
                  <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border border-gray-200 rounded-md py-1 px-2 bg-transparent font-medium text-gray-800 focus:outline-none focus:border-[#8f4a58] cursor-pointer">
                    <option value="default">Default Sorting</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group border border-gray-100 flex flex-col">
                      
                      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                        {product.badge && <span className={`absolute top-4 left-4 z-20 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${product.badgeColor}`}>{product.badge}</span>}
                        <Link to={`/product/${product.id}`} className="w-full h-full block z-10">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                        </Link>
                        
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-20">
                          
                          <button 
                            onClick={(e) => {
                              e.preventDefault(); 
                              addToCart(product, 1, product.colors[0]); 
                            }}
                            className="w-10 h-10 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-[#8f4a58] hover:text-white transition-colors duration-300"
                            title="Add to Cart"
                          >
                            <FaShoppingBag />
                          </button>

                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              toggleWishlist(product);
                            }}
                            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${isInWishlist(product.id) ? 'text-[#ff6f61] bg-[#ff6f61]/10' : 'text-gray-700 hover:bg-[#ff6f61] hover:text-white'}`}
                            title="Add to Wishlist"
                          >
                            <FaHeart />
                          </button>

                          <Link to={`/product/${product.id}`} className="w-10 h-10 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ba9272] hover:text-white transition-colors duration-300" title="Quick View">
                            <FaEye />
                          </Link>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{product.category}</p>
                          <Link to={`/product/${product.id}`} className="font-playfair font-bold text-xl text-gray-900 hover:text-[#8f4a58] transition-colors duration-300 block truncate">{product.name}</Link>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-[#8f4a58] font-bold text-xl">${product.price.toFixed(2)}</span>
                            {product.oldPrice && <span className="text-gray-400 font-medium text-sm line-through ml-2">${product.oldPrice.toFixed(2)}</span>}
                          </div>
                          <div className="flex gap-1">
                            {product.colors.map((color, i) => <span key={i} className="w-4 h-4 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: color }}></span>)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100 py-20 px-4 text-center">
                <FaFilter className="text-6xl text-gray-200 mb-4" />
                <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">We couldn't find anything matching your current filters.</p>
                <button onClick={clearFilters} className="bg-[#8f4a58] text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300">Clear All Filters</button>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Shop;