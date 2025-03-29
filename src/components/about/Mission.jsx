import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiAward } from 'react-icons/fi'
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

const Mission = () => {
  const values = [
    {
      icon: <FiTarget size={24} />,
      title: 'Mission',
      description: 'To connect premium Indian products with global markets, ensuring unmatched quality and customer satisfaction.',
    },
    {
      icon: <FiEye size={24} />,
      title: 'Vision',
      description: 'To be the most trusted global exporter, known for quality, reliability, and sustainable practices.',
    },
    {
      icon: <FiAward size={24} />,
      title: 'Values',
      description: 'Quality, Integrity, Sustainability, Customer Focus, and Innovation drive every step of our business.',
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
    <section className="py-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Mission & Values"
          subtitle="At HD Globe Trade, we are driven by a clear mission and guided by strong values that shape everything we do."
          center={true}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((item, index) => (
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
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Mission