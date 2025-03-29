"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const ContactHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Import/export business related images with consistent paths
  const backgroundImages = [
    "/pics/CONTAINER.jpg", // Cargo ship with containers
    "/pics/box.jpeg", // Warehouse with goods
    "/pics/hero.jpg", // Global shipping/trade map
  ]

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-20 relative overflow-hidden h-[600px] md:h-[650px] flex items-center">
      {/* Background slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0, // Set opacity to 1 for visible images
            }}
            transition={{ duration: 1.5 }}
          >
            {/* Removed the opacity overlay, keeping a subtle dark tint for text readability */}
            <div className="absolute inset-0 bg-black/30 z-20" style={{ mixBlendMode: "normal" }}></div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
          </motion.div>
        ))}
      </div>

      {/* Reduced the gradient overlay opacity for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-25"></div>

      {/* Removed the opacity-10 element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl z-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Get In Touch
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                HD Globe Trade
              </span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto drop-shadow">
              Have questions about our products or services? We're here to help. Reach out to our team for more
              information about our global import and export solutions.
            </p>

            {/* Image indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? "bg-blue-500 w-6" : "bg-gray-500/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero