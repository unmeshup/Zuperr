import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-cred-blue"
          variants={itemVariants}
        >
          About Zuperr
        </motion.h1>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
        >
          <motion.p 
            className="text-cred-light text-lg leading-relaxed"
            variants={itemVariants}
          >
            Welcome to Zuperr! We are dedicated to revolutionizing the job search and recruitment process, making it easier for both job seekers and employers to connect in meaningful ways.
          </motion.p>
          <motion.p 
            className="text-cred-light text-lg leading-relaxed"
            variants={itemVariants}
          >
            Our team of professionals works tirelessly to ensure the highest quality standards and customer satisfaction. We leverage cutting-edge technology and data-driven insights to create a seamless experience for all our users.
          </motion.p>
          <motion.p 
            className="text-cred-light text-lg leading-relaxed"
            variants={itemVariants}
          >
            Founded with a vision to transform the industry, we continue to grow and adapt to meet the evolving needs of the modern job market. Our platform is designed to empower individuals in their career journeys and help businesses find the perfect talent to drive their success.
          </motion.p>
          <motion.div
            className="mt-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 text-cred-blue">Our Mission</h2>
            <p className="text-cred-light text-lg leading-relaxed">
              To create a world where every individual can find fulfilling work and every company can build exceptional teams, fostering growth and innovation across industries.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 text-cred-blue">Our Values</h2>
            <ul className="list-disc list-inside text-cred-light text-lg leading-relaxed space-y-4">
              <li>Innovation: Constantly pushing the boundaries of what's possible in recruitment technology</li>
              <li>Integrity: Maintaining the highest standards of honesty and ethical conduct</li>
              <li>Inclusivity: Promoting diversity and equal opportunities for all</li>
              <li>Excellence: Striving for exceptional quality in everything we do</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

