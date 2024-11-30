import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="bg-cred-dark p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-cred-blue font-bold text-3xl hover:text-opacity-80 transition-colors">
        <span className="text-white">
    <span className="text-cred-blue">z</span>uperr
  </span>
        </Link>
        
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to={item.path}
                className="text-cred-light hover:text-cred-blue transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button 
          onClick={toggleMenu}
          className="md:hidden text-cred-light hover:text-cred-blue transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-cred-dark shadow-lg md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    className="border-b border-cred-gray last:border-b-0"
                  >
                    <Link 
                      to={item.path}
                      className="block py-3 px-4 text-cred-light hover:text-cred-blue transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

