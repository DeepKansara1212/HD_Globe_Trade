import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const Story = () => {
  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className=" overflow-hidden border border-transparent shadow-xl">
              <img
                src="./pics/journey.png"
                alt="HD Globe Trade Story"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -right-6 bg-dark-default p-4 rounded-lg border border-dark-border shadow-lg">
              
              <p className="text-white text-sm">Bunch of Experience</p>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="Our Journey"
              subtitle=""
            />
            
            <div className="space-y-6 text-gray-300">
              <p>
              HD Globe Trade was established with a vision to connect premium products with international markets. We aim to bring the best of rich agricultural and specialty products to customers worldwide, starting our journey with a strong focus on quality and customer satisfaction.
              </p>
              
              <p>
              Founded by Divya Patel and Harshit Patel, experienced entrepreneurs with deep roots in farming and trade, HD Globe Trade was created to bridge the gap between local producers and global markets.He established HD Globe Trade to bridge the gap between local farmers and global markets.
              </p>
              
              <p>
              As we begin this exciting journey, we are committed to working closely with producers, promoting sustainable practices and ensuring top-notch quality control. Our goal is to build long-term relationships with our clients and establish HD Globe Trade as a trusted name in global exports.
              </p>
              
              <p>
              Our foundation rests on three key principles: uncompromising quality, reliable logistics, and exceptional customer service. These values will guide us as we introduce the finest products to the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story