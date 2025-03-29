import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useRef, useState } from "react";

// Add SpotlightCard component
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const cardRef = useRef(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPosition({ x, y });
  }; 

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, ${spotlightColor}, transparent 40%)`,
      }}
    >
      {children} 
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: '011',
      title: 'Sourcing',
      description: 'We partner with certified growers who follow sustainable practices to source the finest premium products.',
    },
    {
      number: '02',
      title: 'Quality Control',
      description: 'Every product undergoes strict checks for size, color, texture, and taste to ensure top-tier quality.',
    },
    {
      number: '03',
      title: 'Processing',
      description: 'Carefully cleaned, sorted, and packed in temperature-controlled facilities to preserve freshness and quality.',
    },
    {
      number: '04',
      title: 'Export Compliance',
      description: 'We manage all export documentation, certifications, and compliance requirements for smooth international shipping.',
    },
    {
      number: '05',
      title: 'Cold Chain Logistics',
      description: 'Our temperature-controlled logistics guarantee products remain fresh from our facilities to global destinations.',
    },
    {
      number: '06',
      title: 'Delivery',
      description: 'We work closely with importers to ensure timely delivery and provide seamless support throughout the process.',
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
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Export Process"
          subtitle="We follow a meticulous process to ensure that only the highest quality mangoes reach international markets."
          center={true}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
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
                {/* Step number */}
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-primary/10 group-hover:text-primary/15 transition-colors duration-300">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process