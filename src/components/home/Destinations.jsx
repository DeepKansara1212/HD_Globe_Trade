"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"

const Destinations = () => {
  const destinations = [
    {
      region: "UAE",
      countries: ["Dubai", "Abu Dhabi", "Sharjah"],
      image: "/pics/dubai.jpg",
    },
    {
      region: "United Kingdom",
      countries: ["England", "Scotland", "Wales"],
      image: "/pics/uk.jpg",
    },
    {
      region: "Australia",
      countries: ["New South Wales", "Victoria", "Queensland"],
      image: "/pics/australia.jpg",
    },
    {
      region: "Singapore",
      countries: ["Marina Bay", "Sentosa", "Orchard Road"],
      image: "/pics/singapore.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Global Reach"
          subtitle="We export premium quality products to major markets across the globe, ensuring timely delivery and customer satisfaction."
          center={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="card group overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.region}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-2" size={16} />
                    <span className="text-white font-medium">{destination.region}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {destination.region}
              </h3>

              <ul className="space-y-2">
                {destination.countries.map((country, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Destinations

