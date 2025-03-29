"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SectionHeading from "../ui/SectionHeading.jsx"

const Products = () => {
  const [activeTab, setActiveTab] = useState("alphonso")

  const products = {
    alphonso: {
      name: "Alphonso Mangoes",
      description:
        'Known as the "King of Mangoes", Alphonso is famous for its rich, creamy, tender texture and delicate, distinctive taste.',
      image: "./pics/Alphonso-Mango.jpg",
      features: ["Rich golden color", "Sweet aromatic flavor", "Fiber-free pulp", "Long shelf life"],
      season: "April to June",
    },
    kesar: {
      name: "Kesar Mangoes",
      description:
        "Kesar mangoes are known for their unique sweet taste and distinct aroma. The pulp has a deep orange color with a hint of saffron.",
      image:
        "./pics/kesar.jpg",
      features: ["Saffron-colored pulp", "Sweet and aromatic", "Medium-sized fruit", "Excellent for processing"],
      upcoming: true,
    },
    banganapalli: {
      name: "Banganapalli Mangoes",
      description:
        "Banganapalli mangoes are large, golden yellow fruits with a sweet, mildly tangy flavor and fiber-free pulp.",
      image:
        "./pics/bengapali.jpg",
      features: ["Large-sized fruit", "Golden yellow skin", "Sweet, mildly tangy taste", "Minimal fiber content"],
      upcoming: true,
    },
  }

  const tabs = [
    { id: "alphonso", label: "Alphonso" },
    { id: "kesar", label: "Kesar" },
    { id: "banganapalli", label: "Banganapalli" },
  ]

  return (
    <section className="py-20 bg-dark-default relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Premium Mango Varieties"
          subtitle="We export the finest varieties of Indian mangoes, carefully selected and packed to preserve their natural flavor and freshness."
          center={true}
        />

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-dark-lighter rounded-full p-1 flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Product Image */}
          <motion.div
            key={`image-${activeTab}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-[600px] mx-auto lg:mx-0"
          >
            <div className="rounded-2xl overflow-hidden border border-dark-border shadow-xl aspect-[4/3.2] w-full">
              <img
                src={products[activeTab].image || "/placeholder.svg"}
                alt={products[activeTab].name}
                className={`w-full h-full object-cover ${products[activeTab].upcoming ? "grayscale" : ""}`}
              />
            </div>

            {/* Season badge */}
            {!products[activeTab].upcoming && (
              <div className="absolute top-4 left-4 bg-dark-lighter bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-border">
                <p className="text-sm">
                  <span className="text-primary font-medium">Season:</span>{" "}
                  <span className="text-white">{products[activeTab].season}</span>
                </p>
              </div>
            )}
            {products[activeTab].upcoming && (
              <div className="absolute top-4 left-4 bg-dark-lighter bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-border">
                <p className="text-sm text-primary font-medium">Upcoming</p>
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            key={`info-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{products[activeTab].name}</h3>
            <p className="text-gray-400 mb-8">{products[activeTab].description}</p>

            <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
            <ul className="space-y-3 mb-8">
              {products[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              {activeTab === "alphonso" ? (
                <Link to="/products" className="btn-primary group">
                  <span className="relative z-10">View All Products</span>
                  <span className="absolute inset-0 bg-primary-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ) : (
                <button className="btn-primary group">
                  <span className="relative z-10">Notify Me</span>
                  <span className="absolute inset-0 bg-primary-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              )}
              <button className="btn-outline group">
                <span className="relative z-10">Request Samples</span>
                <span className="absolute inset-0 bg-dark-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products

