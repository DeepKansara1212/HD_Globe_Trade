import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Ready to Import Premium Products?
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your Journey with HD Globe Trade Today
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your import requirements, request samples, or learn more about our premium product varieties and export services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <FiMail className="mr-2" /> Contact Us
              </Link>
              <Link to="/trust" className="btn-outline">
                View Our Certifications
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA