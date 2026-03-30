import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // شروط صحة البيانات (Validation Schema)
  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log("Message Details:", values);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      resetForm();
    }, 1500);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500 uppercase tracking-wider font-medium"
          >
            <Link to="/" className="hover:text-[#8f4a58] transition-colors">
              Home
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#8f4a58] font-bold">Contact Us</span>
          </motion.div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="w-full lg:w-1/3 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-[#8f4a58] font-bold text-sm tracking-widest uppercase mb-2">
                  Contact Info
                </h2>
                <h3 className="font-playfair font-bold text-3xl text-gray-900 mb-6">
                  We are here to help you.
                </h3>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  Have a question about our furniture, need help with an order,
                  or just want to say hello? Drop us a message or visit our
                  showroom.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-[#8f4a58]/5 text-[#8f4a58] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Our Showroom
                    </h4>
                    <p className="text-gray-500 font-light text-sm">
                      123 Design Street, Furniture District
                      <br />
                      Cairo, Egypt 11511
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-[#8f4a58]/5 text-[#8f4a58] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-500 font-light text-sm">
                      +20 123 456 7890
                      <br />
                      +20 234 567 8901
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-[#8f4a58]/5 text-[#8f4a58] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#8f4a58] group-hover:text-white transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Email Address
                    </h4>
                    <p className="text-gray-500 font-light text-sm">
                      support@vineta.com
                      <br />
                      sales@vineta.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h3 className="font-playfair font-bold text-3xl text-gray-900 mb-8">
                        Send us a Message
                      </h3>

                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        }}
                        validationSchema={contactSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                  Your Name
                                </label>
                                <Field
                                  type="text"
                                  name="name"
                                  placeholder="John Doe"
                                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="text-red-500 text-xs mt-1.5 font-bold"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                  Email Address
                                </label>
                                <Field
                                  type="email"
                                  name="email"
                                  placeholder="you@example.com"
                                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-red-500 text-xs mt-1.5 font-bold"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">
                                Subject
                              </label>
                              <Field
                                type="text"
                                name="subject"
                                placeholder="How can we help you?"
                                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10"
                              />
                              <ErrorMessage
                                name="subject"
                                component="div"
                                className="text-red-500 text-xs mt-1.5 font-bold"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">
                                Message
                              </label>
                              <Field
                                as="textarea"
                                name="message"
                                rows={5}
                                placeholder="Write your message here..."
                                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 outline-none transition-all font-medium bg-gray-50 focus:bg-white focus:border-[#8f4a58] focus:ring-4 focus:ring-[#8f4a58]/10 resize-none"
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="text-red-500 text-xs mt-1.5 font-bold"
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-[#8f4a58] text-white font-bold text-lg rounded-xl px-8 py-4 flex items-center justify-center gap-2 hover:bg-gray-900 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? "Sending..." : "Send Message"}{" "}
                              <FaPaperPlane className="text-sm" />
                            </button>
                          </Form>
                        )}
                      </Formik>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-10"
                    >
                      <div className="w-20 h-20 bg-[#38b000]/10 rounded-full flex items-center justify-center mb-6">
                        <FaCheckCircle className="text-5xl text-[#38b000]" />
                      </div>
                      <h3 className="font-playfair font-bold text-3xl text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-500 font-light text-lg mb-8 max-w-md">
                        Thank you for reaching out. Our team will get back to
                        you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gray-900 text-white font-bold rounded-full px-8 py-3 hover:bg-[#8f4a58] transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
        </section>
    </div>
  );
};

export default Contact;
