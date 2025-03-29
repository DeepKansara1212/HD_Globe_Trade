"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

// Assuming SectionHeading is a component you've created
import SectionHeading from "../ui/SectionHeading.jsx"

const Team = () => {
  const team = [
    {
      name: "Harshit Patel",
      position: "Co-Founder",
      image: "/pics/male.jpeg",
      bio: "Harshit oversees all export operations, ensuring compliance with international standards and timely deliveries.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@hdglobetrade.com",
      },
    },
    {
      name: "Divy Patel",
      position: "CEO",
      image: "/pics/Divy.jpg",
      bio: "With a strong background in agriculture and trade, Divy Patel lead HD Globe Trade with vision and expertise as they embark on this new journey in the export industry.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "harish@hdglobetrade.com",
      },
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our experienced team is dedicated to ensuring the highest quality standards and customer satisfaction."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-sm rounded-lg border border-gray-800 p-4 sm:p-6 hover:border-primary/50 text-center group"
            >
              {/* Member Image - Fixed container with aspect ratio */}
              <div className="relative mb-4 sm:mb-6 rounded-lg overflow-hidden">
                <div className="w-full h-64 mx-auto relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-lg transition-transform duration-500 group-hover:scale-110 shadow-lg"
                  />
                </div>

                {/* Social links overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                {member.position}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team