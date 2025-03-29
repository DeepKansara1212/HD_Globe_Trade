import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const QualityControl = () => {
  return (
    <section className="py-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          > 
            <SectionHeading
              title="Our Quality Control Process"
              subtitle="We implement a rigorous quality control process to ensure that only the finest products reach international markets."
            /> 
            
            <div className="space-y-6"> 
              {/* Quality steps */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-semibold">01</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Sustainable Sourcing
                  </h3>
                  <p className="text-gray-400">We collaborate with farms committed to sustainable practices, ensuring premium products grown with care.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-semibold">02</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Expert Harvesting
                  </h3>
                  <p className="text-gray-400">Our team oversees every harvest, ensuring products are collected at the peak of perfection for optimal quality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-semibold">03</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Rigorous Inspection
                  </h3>
                  <p className="text-gray-400">Every product undergoes a thorough 12-point check for size, color, quality, and consistency to guarantee excellence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-semibold">04</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Certified Processing
                  </h3>
                  <p className="text-gray-400">Our HACCP-certified facilities uphold strict hygiene and temperature control to preserve product integrity throughout processing.</p> 
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-dark-border shadow-xl">
              <img
                src="./pics/quality.jpg"
                alt="Quality Control Process"
                className="w-full h-auto object-cover"
              />
            </div> 
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-dark-default p-4 rounded-full border border-primary shadow-lg">
              <div className="text-center">
                <p className="text-primary font-bold text-xl">100%</p>
                <p className="text-white text-xs">Quality Assured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default QualityControl