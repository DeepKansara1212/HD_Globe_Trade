import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, center = false, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto' : ''}`}>
      <motion.h2 
        className={`section-title ${light ? 'text-white' : 'gradient-text'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`section-subtitle ${center ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading