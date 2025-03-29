import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'

const Certifications = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality standards across all operations.',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
    },
    {
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Point certification for food safety management.',
      image: 'https://cdn-icons-png.flaticon.com/512/1021/1021220.png',
    },
    {
      name: 'Global GAP',
      description: 'Good Agricultural Practices certification ensuring sustainable and safe farming methods.',
      image: 'https://cdn-icons-png.flaticon.com/512/2454/2454297.png',
    },
    {
      name: 'APEDA Registered',
      description: 'Registered with Agricultural and Processed Food Products Export Development Authority of India.',
      image: 'https://cdn-icons-png.flaticon.com/512/3426/3426653.png',
    },
    {
      name: 'Organic Certification',
      description: 'Certification for organic farming practices for select mango varieties.',
      image: 'https://cdn-icons-png.flaticon.com/512/2454/2454299.png',
    },
    {
      name: 'Fair Trade Certified',
      description: 'Ensuring fair compensation and good working conditions for farmers and workers.',
      image: 'https://cdn-icons-png.flaticon.com/512/1548/1548240.png',
    },
  ]

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Certifications"
          subtitle="We adhere to international standards and hold various certifications that validate our commitment to quality and safety."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-primary/50 flex items-start"
            >
              <div className="w-16 h-16 rounded-lg bg-dark-light flex items-center justify-center mr-4">
                <img src={cert.image} alt={cert.name} className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications