import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-cred-black flex flex-col items-center justify-center p-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="text-center"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-cred-blue mb-8"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Coming Soon
        </motion.h1>
        <motion.p 
          className="text-cred-light text-xl md:text-2xl mb-12"
          variants={itemVariants}
        >
          We're working hard to bring you something amazing!
        </motion.p>
        <motion.div
  className="relative z-10"
  variants={itemVariants}
>
  <Link 
    to="/" 
    className="inline-flex items-center gap-2 text-cred-blue hover:text-cred-light transition-colors text-lg"
  >
    <ArrowLeft size={24} />
    <span>Back to Home</span>
  </Link>
</motion.div>

      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cred-blue"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;

