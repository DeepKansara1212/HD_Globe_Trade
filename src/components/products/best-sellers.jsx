import React from 'react';
import { motion } from 'framer-motion';

const FuturisticErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"
      />

      {/* Main Error Content */}
      <div className="relative z-10 text-center p-8 bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            The page you are looking for seems to have drifted into the digital void. Let's get you back on course.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Return to Homepage
          </a>
        </motion.div>
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/30 rounded-full blur-lg"
      />
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-purple-500/30 rounded-full blur-lg"
      />
    </div>
  );
};

export default FuturisticErrorPage;