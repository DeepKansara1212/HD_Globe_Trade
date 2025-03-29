"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const controls = useAnimation()
  const autoplayTimerRef = useRef(null)

  const testimonials = [
    {
      name: "John Smith",
      position: "Purchasing Manager",
      company: "FreshFruits UK",
      image: "/pics/male.jpeg",
      quote:
        "HD Globe Trade has been our trusted supplier for over 5 years. Their Alphonso mangoes are consistently of the highest quality, and their logistics are impeccable.",
      location: "London, UK",
    },
    {
      name: "Sophie Laurent",
      position: "Import Director",
      company: "EuroFresh GmbH",
      image: "/pics/female.jpeg",
      quote:
        "We have tried many suppliers, but HD Globe Trade stands out for their commitment to quality and reliability. Their mangoes are always fresh and delicious.",
      location: "Berlin, Germany",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Pacific Imports",
      image: "/pics/male.jpeg",
      quote:
        "The quality control at HD Globe Trade is exceptional. Every shipment arrives in perfect condition, and their customer service is responsive and professional.",
      location: "Sydney, Australia",
    },
    {
      name: "Emma Wilson",
      position: "Head of Procurement",
      company: "Canadian Produce",
      image: "/pics/female.jpeg",
      quote:
        "Working with HD Globe Trade has been a pleasure. Their attention to detail and commitment to quality have made them our preferred mango supplier.",
      location: "Toronto, Canada",
    },
  ]

  // Calculate slider width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)

    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Update slider position when activeIndex changes with smooth animation
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      controls.start({
        x: -activeIndex * slideWidth,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.8,
        },
      })
    }
  }, [activeIndex, controls])

  // Autoplay functionality - change slide every 3 seconds
  useEffect(() => {
    const startAutoplay = () => {
      clearInterval(autoplayTimerRef.current)

      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 3000) // Change slide every 3 seconds
    }

    startAutoplay()

    // Clean up interval on component unmount
    return () => {
      clearInterval(autoplayTimerRef.current)
    }
  }, [testimonials.length])

  // Reset autoplay timer when activeIndex changes manually
  useEffect(() => {
    clearInterval(autoplayTimerRef.current)

    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => {
      clearInterval(autoplayTimerRef.current)
    }
  }, [activeIndex, testimonials.length])

  const handleDragEnd = (e, { offset, velocity }) => {
    setIsDragging(false)

    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth

      // If dragged more than 1/3 of slide width or with high velocity
      if (offset.x < -slideWidth / 3 || velocity.x < -500) {
        if (activeIndex < testimonials.length - 1) {
          setActiveIndex(activeIndex + 1)
        } else {
          // Snap back to current slide with smooth animation
          controls.start({
            x: -activeIndex * slideWidth,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 300,
            },
          })
        }
      } else if (offset.x > slideWidth / 3 || velocity.x > 500) {
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1)
        } else {
          // Snap back to current slide with smooth animation
          controls.start({
            x: -activeIndex * slideWidth,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 300,
            },
          })
        }
      } else {
        // Snap back to current slide with smooth animation
        controls.start({
          x: -activeIndex * slideWidth,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 300,
          },
        })
      }
    }
  }

  return (
    <section className="py-20 bg-dark-default relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Don't just take our word for it. Here's what our international clients have to say about our products and services."
          center={true}
        />

        <div className="max-w-4xl mx-auto overflow-hidden">
          {/* Slider Container */}
          <div className="relative overflow-hidden" ref={sliderRef}>
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragElastic={0.1}
              animate={controls}
              onDragStart={() => {
                setIsDragging(true)
              }}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} className="min-w-full px-4">
                  <div className="card p-8 md:p-10">
                    {/* Quote icon */}
                    <div className="absolute top-8 right-8 text-6xl text-primary/20 font-serif">"</div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Client Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div>
                        <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>

                        <div>
                          <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                          <p className="text-primary text-sm mt-1">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Swipe Instruction (Mobile Only) */}
          <div className="mt-4 text-center text-gray-400 text-sm md:hidden">
            <span>Swipe left or right to view more testimonials</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

