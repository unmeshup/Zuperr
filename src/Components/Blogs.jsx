import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

const BlogPostPreview = ({
  id,
  title,
  excerpt,
  author,
  date,
  category,
  onClick,
}) => (
  <motion.div
    className="bg-cred-dark p-6 rounded-lg shadow-md cursor-pointer group"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    onClick={() => onClick(id)}
  >
    <h3 className="text-xl font-semibold mb-2 text-cred-blue group-hover:text-cred-light transition-colors">
      {title}
    </h3>
    <p className="text-cred-light mb-4">{excerpt}</p>
    <div className="flex justify-between items-center text-sm text-cred-light">
      <span>{author}</span>
      <span>{date}</span>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <span className="inline-block bg-cred-gray text-cred-blue text-xs px-2 py-1 rounded-full">
        {category}
      </span>
      <ChevronRight className="text-cred-blue group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const BlogPostPopup = ({ post, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-cred-dark rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 15 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-cred-blue">{post.title}</h2>
          <motion.button
            onClick={onClose}
            className="text-cred-light hover:text-cred-blue transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close"
          >
            <X size={24} />
          </motion.button>
        </div>
        <div className="flex justify-between items-center text-sm text-cred-light mb-4">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-6">
          <span className="inline-block bg-cred-gray text-cred-blue text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Blog = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const employeePosts = posts.filter((post) => post.type === "employee");
  const recruiterPosts = posts.filter((post) => post.type === "recruiter");

  const handlePostClick = (id) => {
    const post = posts.find((p) => p.id === id);
    setSelectedPost(post);
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-cred-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center text-cred-light mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">
            <span className="text-cred-blue">z</span>uperr blogs
          </span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold mb-8 text-cred-blue">
              For Employees
            </h2>
            <div className="space-y-8">
              {employeePosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <BlogPostPreview {...post} onClick={handlePostClick} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold mb-8 text-cred-blue">
              For Recruiters
            </h2>
            <div className="space-y-8">
              {recruiterPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <BlogPostPreview {...post} onClick={handlePostClick} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-cred-blue text-cred-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <BlogPostPopup post={selectedPost} onClose={handleClosePopup} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
