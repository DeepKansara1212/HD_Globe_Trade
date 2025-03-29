import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiInfo, FiPackage, FiCalendar, FiTruck } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading.jsx'

const ProductsList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 'alphonso',
      name: 'Alphonso Mangoes',
      description: 'Known as the "King of Mangoes", Alphonso is famous for its rich, creamy, tender texture and delicate, distinctive taste.',
      image: './pics/alphonso.jpg',
      origin: 'Ratnagiri, Maharashtra, India',
      season: 'April to June',
      weight: '250g - 300g per fruit',
      packaging: 'Premium gift boxes of 6, 12, or 24 fruits',
      // price: '$35 - $120 per box',
      features: [
        'Rich golden color',
        'Sweet aromatic flavor',
        'Fiber-free pulp',
        'Long shelf life',
      ],
      nutritionalInfo: {
        calories: '60 kcal per 100g',
        protein: '0.82g per 100g',
        carbs: '15g per 100g',
        fiber: '1.6g per 100g',
        vitamins: 'A, C, E, K, and B-complex vitamins'
      },
      shippingInfo: 'Temperature-controlled shipping to ensure optimal ripeness upon arrival. Each fruit is individually wrapped and cushioned for protection.',
      certifications: ['Organic Certified', 'Global GAP', 'APEDA Registered'] 
    },
    {
      id: 'kesar',
      name: 'Kesar Mangoes',
      description: 'Kesar mangoes are known for their unique sweet taste and distinct aroma. The pulp has a deep orange color with a hint of saffron.',
      image: './pics/kesar.jpg',
      origin: 'Junagadh, Gujarat, India',
      season: 'May to July',
      weight: '200g - 250g per fruit',
      packaging: 'Premium gift boxes of 6, 12, or 24 fruits',
      // price: '$30 - $100 per box',
      features: [
        'Saffron-colored pulp',
        'Sweet and aromatic',
        'Medium-sized fruit',
        'Excellent for processing',
      ],
      nutritionalInfo: {
        calories: '55 kcal per 100g',
        protein: '0.7g per 100g',
        carbs: '14g per 100g',
        fiber: '1.8g per 100g',
        vitamins: 'A, C, and B-complex vitamins'
      },
      shippingInfo: 'Temperature-controlled shipping to ensure optimal ripeness upon arrival. Each fruit is individually wrapped and cushioned for protection.',
      certifications: ['Global GAP', 'APEDA Registered']
    },
    {
      id: 'banganapalli',
      name: 'Banganapalli Mangoes',
      description: 'Banganapalli mangoes are large, golden yellow fruits with a sweet, mildly tangy flavor and fiber-free pulp.',
      image: './pics/bengapali.jpg',
      origin: 'Andhra Pradesh, India',
      season: 'April to June',
      weight: '300g - 350g per fruit',
      packaging: 'Premium gift boxes of 6, 12, or 24 fruits',
      // price: '$28 - $95 per box',
      features: [
        'Large-sized fruit',
        'Golden yellow skin',
        'Sweet, mildly tangy taste',
        'Minimal fiber content',
      ],
      nutritionalInfo: {
        calories: '58 kcal per 100g',
        protein: '0.8g per 100g',
        carbs: '15g per 100g',
        fiber: '1.5g per 100g',
        vitamins: 'A, C, and B-complex vitamins'
      },
      shippingInfo: 'Temperature-controlled shipping to ensure optimal ripeness upon arrival. Each fruit is individually wrapped and cushioned for protection.',
      certifications: ['Global GAP', 'APEDA Registered']
    },
    {
      id: 'mallika',
      name: 'Mallika Mangoes',
      description: 'A hybrid of Neelum and Dasheri mangoes, Mallika offers a rich, sweet flavor with a distinctive aroma and smooth, fiber-free pulp.',
      image: './pics/mallika.jpg',
      origin: 'Various regions of India',
      season: 'June to July',
      weight: '250g - 300g per fruit',
      packaging: 'Premium gift boxes of 6, 12, or 24 fruits',
      // price: '$32 - $105 per box',
      features: [
        'Honey-sweet flavor',
        'Deep yellow pulp',
        'Oblong shape',
        'Excellent shelf life',
      ],
      nutritionalInfo: {
        calories: '57 kcal per 100g',
        protein: '0.75g per 100g',
        carbs: '14.5g per 100g',
        fiber: '1.7g per 100g',
        vitamins: 'A, C, and B-complex vitamins'
      },
      shippingInfo: 'Temperature-controlled shipping to ensure optimal ripeness upon arrival. Each fruit is individually wrapped and cushioned for protection.',
      certifications: ['Global GAP', 'APEDA Registered']
    }
  ]

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    // Scroll to product detail section
    setTimeout(() => {
      document.getElementById('product-detail').scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const closeProductDetail = () => {
    setSelectedProduct(null)
  }

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Premium Mango Varieties"
          subtitle="We export the finest varieties of Indian mangoes, carefully selected and packed to preserve their natural flavor and freshness."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default to-transparent opacity-60"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-dark-default bg-opacity-90 text-white rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{product.season}</span>
                <span className="text-white bg-dark-light px-3 py-1 rounded-full text-xs">Premium</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Product Detail Section */}
        <div id="product-detail" className="mt-20">
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                <button 
                  onClick={closeProductDetail}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="rounded-xl overflow-hidden border border-dark-border">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div>
                  <p className="text-gray-300 mb-6">{selectedProduct.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <FiInfo size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Origin</h4>
                        <p className="text-gray-400 text-sm">{selectedProduct.origin}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <FiCalendar size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Season</h4>
                        <p className="text-gray-400 text-sm">{selectedProduct.season}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <FiPackage size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Packaging</h4>
                        <p className="text-gray-400 text-sm">{selectedProduct.packaging}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                        <FiTruck size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Weight</h4>
                        <p className="text-gray-400 text-sm">{selectedProduct.weight}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.certifications.map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-dark-light text-primary text-xs rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* <div>
                      <span className="text-gray-400 text-sm">Price Range:</span>
                      <span className="text-white font-semibold ml-2">{selectedProduct.price}</span>
                    </div> */}
                    <button className="btn-primary">
                      {selectedProduct.id === 'alphonso' ? 'In Stock' : 'Upcoming...'}
                    </button>
                  </div>
                </div> 
              </div> 
              
              {/* Additional Information */}
              <div className="mt-8 pt-8 border-t border-dark-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Nutritional Information */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Nutritional Information</h4>
                    <ul className="space-y-2">
                      {Object.entries(selectedProduct.nutritionalInfo).map(([key, value]) => (
                        <li key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-white">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Shipping Information */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">Shipping Information</h4>
                    <p className="text-gray-400">{selectedProduct.shippingInfo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductsList