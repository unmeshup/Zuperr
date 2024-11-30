import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <motion.h1 
            className="text-3xl font-bold mb-4 text-gray-900"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.title}
          </motion.h1>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
          <motion.div 
            className="prose max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </div>
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;

