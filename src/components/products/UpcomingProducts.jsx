import { motion } from 'framer-motion'
import { FiCalendar, FiClock } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading.jsx'

const UpcomingProducts = () => {
  const upcomingProducts = [
    {
      name: 'Premium Charcoal Wood Powder',
      description: 'Our new line of high-quality charcoal wood powder, produced using eco-friendly methods for maximum purity and performance.',
      image: '/pics/Charcoal.jpg',
      launchDate: 'July 2026',
      features: [
        '100% Natural and Pure',
        'Eco-Friendly Production',
        'Fine Texture for Smooth Application',
        'Premium Packaging'
      ]
    },
    {
      name: 'Tech Toys – The Future of Fun and Learning',
      description: 'Our latest collection of high-tech toys designed to inspire creativity, enhance learning, and provide hours of entertainment.',
      image: '/pics/Tech-Toys(1).jpg',
      launchDate: 'March 2026',
      features: [
        'Interactive & educational',
        'Safe and durable materials',
        'Cutting-edge technology integration',
        'Long-lasting battery life'
      ]
    },
    {
      name: 'Soft and Cuddly Stuffed Toys',
      description: 'Introducing our new collection of soft, cuddly, and huggable stuffed toys, perfect for all ages. Crafted with care, these toys are designed to provide comfort and companionship.',
      image: './pics/soft toys.jpg',
      launchDate: 'May 2026',
      features: [
        'High-quality, soft fabric',
        'Safe, non-toxic materials',
        'Machine washable',
        'Available in a variety of cute designs'
      ]
    }
  ]

  return (
    <section className="py-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Upcoming Products"
          subtitle="Exciting new products coming soon to our premium mango export lineup. Stay tuned for these launches in the next few months."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default to-transparent opacity-60"></div>
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs rounded-full">
                  Coming Soon
                </div>
              </div>
              
              {/* Product Info */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <FiCalendar className="text-primary mr-2" />
                  <span className="text-gray-300 text-sm">{product.launchDate}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="text-primary mr-2" />
                  <span className="text-gray-300 text-sm">Coming in 3 months</span>
                </div>
              </div>
              
              <h4 className="text-white font-medium mb-3">Key Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-outline w-full mt-6">
                Notify Me
              </button>
            </motion.div> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingProducts