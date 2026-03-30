import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaLock, FaUser, FaArrowRight, FaHome, FaGoogle, FaApple } from 'react-icons/fa';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLogin]);

  // Validation Schemas
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const registerSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleLoginSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      setSubmitting(false);
      navigate('/'); 
    }, 1500);
  };

  const handleRegisterSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      setSubmitting(false);
      setIsLogin(true); 
    }, 1500);
  };

  return (
    <div className="w-full font-outfit text-gray-800 bg-[#f4f5f7] min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8f4a58]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff6f61]/5 rounded-full blur-3xl"></div>

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-[#8f4a58] transition-colors font-bold tracking-wider z-20 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md">
        <FaHome className="text-lg" /> Home
      </Link>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="w-full max-w-[1100px] bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(143,74,88,0.08)] overflow-hidden flex flex-col md:flex-row border border-white relative z-10"
      >
        
        {/* Left Side: Luxury Image with Glassmorphism */}
        <div className="hidden md:block w-1/2 relative bg-gray-900 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
            alt="Interior Design" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
            
            {/* Glassmorphism Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl"
            >
              <h2 className="font-playfair text-white text-4xl font-bold mb-3 leading-tight">
                Design Your <br/><span className="italic text-[#ff6f61]">Dream Space.</span>
              </h2>
              <p className="text-white/80 text-sm font-light leading-relaxed">
                Join our community of interior lovers. Get access to exclusive collections, early sales, and personalized decor recommendations.
              </p>
            </motion.div>
            
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center relative bg-white">
          
          <div className="flex gap-8 mb-8 border-b-2 border-gray-100 pb-4 relative">
            <button onClick={() => setIsLogin(true)} className={`text-2xl font-playfair font-bold transition-colors ${isLogin ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
              Log In
            </button>
            <button onClick={() => setIsLogin(false)} className={`text-2xl font-playfair font-bold transition-colors ${!isLogin ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
              Register
            </button>
            <motion.div 
              className="absolute bottom-[-2px] h-1 rounded-full bg-[#8f4a58]"
              initial={false}
              animate={{ left: isLogin ? '0%' : '105px', width: isLogin ? '70px' : '95px' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Social Login Buttons (UI Enhancements) */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-gray-700 text-sm">
              <FaGoogle className="text-red-500 text-lg" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-gray-700 text-sm">
              <FaApple className="text-gray-900 text-lg" /> Apple
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* Login Form */}
            {isLogin && (
              <motion.div key="login" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}>
                <Formik initialValues={{ email: '', password: '' }} validationSchema={loginSchema} onSubmit={handleLoginSubmit}>
                  {({ isSubmitting }) => (
                    <Form className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <div className="relative group">
                          <Field type="email" name="email" placeholder="you@example.com" className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10" />
                          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8f4a58] transition-colors" />
                        </div>
                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1.5 font-bold" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <div className="relative group">
                          <Field type="password" name="password" placeholder="••••••••" className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10" />
                          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8f4a58] transition-colors" />
                        </div>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1.5 font-bold" />
                      </div>

                      <div className="flex justify-between items-center text-sm pt-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="accent-[#8f4a58] w-4 h-4 cursor-pointer" />
                          <span className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="text-[#8f4a58] font-bold hover:text-[#ff6f61] transition-colors">Forgot Password?</a>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full bg-[#8f4a58] text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-gray-900 hover:shadow-[0_10px_20px_rgba(143,74,88,0.2)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-6">
                        {isSubmitting ? 'Authenticating...' : 'Sign In to Your Account'} <FaArrowRight className="text-sm" />
                      </button>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            )}

            {/* Register Form */}
            {!isLogin && (
              <motion.div key="register" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                <Formik initialValues={{ fullName: '', email: '', password: '' }} validationSchema={registerSchema} onSubmit={handleRegisterSubmit}>
                  {({ isSubmitting }) => (
                    <Form className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <div className="relative group">
                          <Field type="text" name="fullName" placeholder="Enter your full name" className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10" />
                          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8f4a58] transition-colors" />
                        </div>
                        <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1.5 font-bold" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <div className="relative group">
                          <Field type="email" name="email" placeholder="you@example.com" className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10" />
                          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8f4a58] transition-colors" />
                        </div>
                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1.5 font-bold" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <div className="relative group">
                          <Field type="password" name="password" placeholder="Create a strong password" className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10" />
                          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8f4a58] transition-colors" />
                        </div>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1.5 font-bold" />
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full bg-[#8f4a58] text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-gray-900 hover:shadow-[0_10px_20px_rgba(143,74,88,0.2)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-6">
                        {isSubmitting ? 'Creating Account...' : 'Create Account'} <FaArrowRight className="text-sm" />
                      </button>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;