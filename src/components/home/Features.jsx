import { motion } from 'framer-motion'
import { FiPackage, FiAward, FiTruck, FiShield } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useRef, useState } from "react";

// Spotlight Card Component (integrated)
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    >
  <div
    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
    style={{
      opacity,
      background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
    }}
  />
{ children }
    </div >
  );
};

const Features = () => {
  const features = [
    {
      icon: <FiPackage size={24} />,
      title: 'Premium Quality',
      description: 'Carefully selected to meet the highest standards, ensuring unmatched quality and excellence.',
    },
    {
      icon: <FiAward size={24} />,
      title: 'Certified Products',
      description: 'All our products are internationally certified, meeting strict global standards for quality and safety.',
    },
    {
      icon: <FiTruck size={24} />,
      title: 'Global Shipping',
      description: 'Reliable, temperature-controlled shipping to UAE, UK, Australia and Singapore — always on time.',
    },
    {
      icon: <FiShield size={24} />,
      title: 'Quality Assurance',
      description: 'Rigorous checks at every stage, from sourcing to delivery, to guarantee premium quality.',
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
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Why Choose HD Globe Trade"
          subtitle="We pride ourselves on delivering the finest quality products to international markets with reliability and excellence."
          center={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard
                className="card group h-full"
                spotlightColor="rgba(59, 130, 246, 0.2)"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features