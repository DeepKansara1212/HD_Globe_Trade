import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-default relative overflow-hidden pt-20 pb-20">
      {/* Futuristic Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          transition: { 
            duration: 9, // increased from 3 to 6
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
      ></motion.div>

      {/* Animated Blurred Circles */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          transition: {
            duration: 8, // increased from 4 to 8
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          transition: {
            duration: 8, // increased from 4 to 8
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      ></motion.div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} // increased from 0.5 to 1
          >
            <motion.h1 
              className="text-9xl font-bold text-primary mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.05, 1],
                opacity: 1,
                transition: { 
                  duration: 1.6, // increased from 0.8 to 1.6
                  type: "spring",
                  stiffness: 120
                }
              }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: 0.6, // increased from 0.3 to 0.6
                  type: "spring",
                  stiffness: 100
                }
              }}
            >
              Oops! Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: 1, // increased from 0.5 to 1
                  type: "spring",
                  stiffness: 100
                }
              }}
            >
              Sorry, but the page you are looking for does not exist, has been removed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.4 } // increased from 0.2 to 0.4
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className="btn-primary inline-block px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Go to Homepage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NotFound