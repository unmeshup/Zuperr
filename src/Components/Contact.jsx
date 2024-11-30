import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Backend Part
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-cred-black py-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-cred-blue"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-6 text-cred-blue">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cred-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-cred-dark text-cred-light rounded-md focus:outline-none focus:ring-2 focus:ring-cred-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-cred-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-cred-dark text-cred-light rounded-md focus:outline-none focus:ring-2 focus:ring-cred-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-cred-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-cred-dark text-cred-light rounded-md focus:outline-none focus:ring-2 focus:ring-cred-blue"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-cred-blue text-cred-black py-3 px-6 rounded-md font-semibold hover:bg-opacity-80 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send size={18} className="inline-block ml-2" />
              </motion.button>
            </form>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-semibold mb-6 text-cred-blue">Contact Information</h2>
            <div className="flex items-start space-x-4">
              <Phone size={24} className="text-cred-blue mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-cred-light">Phone</h3>
                <p className="text-cred-light">+91 7039494338</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail size={24} className="text-cred-blue mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-cred-light">Email</h3>
                <p className="text-cred-light">Support@zuperr.co</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-cred-blue mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-cred-light">Address</h3>
                <p className="text-cred-light">Mumbai, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

