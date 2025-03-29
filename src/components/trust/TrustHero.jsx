import { motion } from 'framer-motion'

const TrustHero = () => {
  return (
    <section className="pt-32 pb-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Trust & Certifications
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why <span className="gradient-text">Trust</span> HD Globe Trade
            </h1>
            
            <p className="text-gray-400 text-lg mb-8">
              Discover our certifications, compliance standards, and commitment to quality that make us a trusted export partner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustHero