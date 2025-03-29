import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Cpu, Rocket } from 'lucide-react';

const FuturisticErrorPage = () => {
  const [glitchEffect, setGlitchEffect] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Central Error Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 max-w-2xl w-full shadow-2xl"
      >
        {/* Animated Glitch 404 */}
        <div 
          onMouseEnter={() => setGlitchEffect(true)}
          onMouseLeave={() => setGlitchEffect(false)}
          className="relative"
        >
          <h1 className={`text-[12rem] font-bold tracking-tighter 
            ${glitchEffect ? 'animate-glitch' : ''}
            bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600`}
          >
            404
          </h1>
          {glitchEffect && (
            <>
              <div className="absolute top-0 left-0 text-[12rem] opacity-50 text-red-500 animate-glitch-1">404</div>
              <div className="absolute top-0 left-0 text-[12rem] opacity-50 text-blue-500 animate-glitch-2">404</div>
            </>
          )}
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-gray-100">
            Lost in Digital Space
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Looks like you&apos;ve navigated beyond the known digital universe. The page you&apos;re seeking has quantum shifted into another dimension.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <a 
            href="/" 
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 group"
          >
            <Rocket className="w-5 h-5 group-hover:animate-spin" />
            <span>Return to Base</span>
          </a>
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-700 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
          >
            <Cpu className="w-5 h-5 group-hover:animate-pulse" />
            <span>Reload Systems</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Ambient Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [-20, 0, -20],
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
      />
    </div>
  );
};

export default FuturisticErrorPage;