import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: ''
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
    navigate('/coming-soon');
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="bg-cred-dark rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <motion.label 
            className="block text-cred-light text-sm font-bold mb-2" 
            htmlFor="name"
            whileHover={{ x: 5 }}
          >
            Name
          </motion.label>
          <motion.input
            className="bg-cred-gray text-cred-light shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline focus:border-cred-accent"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>
        <div className="mb-6">
          <motion.label 
            className="block text-cred-light text-sm font-bold mb-2" 
            htmlFor="profession"
            whileHover={{ x: 5 }}
          >
            Profession
          </motion.label>
          <motion.input
            className="bg-cred-gray text-cred-light shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline focus:border-cred-accent"
            id="profession"
            name="profession"
            type="text"
            placeholder="Your Profession"
            value={formData.profession}
            onChange={handleChange}
            required
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>
        <div className="mb-6">
          <motion.label 
            className="block text-cred-light text-sm font-bold mb-2" 
            htmlFor="email"
            whileHover={{ x: 5 }}
          >
            Email
          </motion.label>
          <motion.input
            className="bg-cred-gray text-cred-light shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline focus:border-cred-accent"
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>
        <motion.div 
          className="flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
        >
          <motion.button
            className="bg-cred-blue hover:bg-opacity-80 text-cred-black font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-200"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;

