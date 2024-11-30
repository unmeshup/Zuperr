import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Zuperr/61568067879295/', label: 'Zuperr' },
    { icon: Twitter, href: 'https://x.com/zuperr_co', label: '@zuperr_co' },
    { icon: Instagram, href: 'https://www.instagram.com/Zuperr.co/', label: '@zuperr.co' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zuperr9', label: 'zuperr.co' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-cred-dark text-cred-light py-12"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-cred-blue">Connect with us</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-cred-light hover:text-cred-blue transition-colors"
                  whileHover={{ x: 5 }}
                  variants={itemVariants}
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-cred-blue">Legal</h3>
            <motion.p className="text-sm mb-4" variants={itemVariants}>
              By using this website, you agree to our{' '}
              <a href="#" className="underline hover:text-cred-blue">Terms and Conditions</a> and{' '}
              <a href="#" className="underline hover:text-cred-blue">Privacy Policy</a>.
            </motion.p>
            <motion.p className="text-sm" variants={itemVariants}>
              &copy; {new Date().getFullYear()} Zuperr. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

