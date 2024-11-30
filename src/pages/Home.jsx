import React from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from '../Components/RegistrationForn';

const Home = () => {
  return (
    <div className="min-h-screen bg-cred-black text-cred-light overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cred-dark to-cred-black" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cred-blue"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
  Welcome to{" "}
  <span className="text-white">
    <span className="text-cred-blue">z</span>uperr
  </span>
</p>

        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover your dream job with Zuperr
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RegistrationForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

