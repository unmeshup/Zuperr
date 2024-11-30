import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleJoinChannel = () => {
    window.open('https://whatsapp.com/channel/0029Vav7R6R8vd1ItdD5YF18', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-green-600">Join Our Community</h3>
              <motion.button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Join our WhatsApp channel to stay updated with the latest news and updates!
            </p>
            <motion.button
              onClick={handleJoinChannel}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Join WhatsApp Channel
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            onClick={togglePopup}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppPopup;

