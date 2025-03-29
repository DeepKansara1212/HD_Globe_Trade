import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xldjeekb");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8">
              Our team is ready to assist you with any inquiries about our products, export process or partnership opportunities.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Our Location</h3>
                  <p className="text-gray-400">F-9,10,11 RC Complex, beside pushpkamal hopstel, v.v.nagar , anand . 388120.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400">info@hdglobetrade.com</p>
                  <p className="text-gray-400">exports@hdglobetrade.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <p className="text-gray-400">+91 63538 50035</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FiClock size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Business Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-white font-semibold mb-3">Export Destinations</h3>
              <p className="text-gray-400 mb-4">We currently export to the following regions:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-gray-300">UAE</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-gray-300">United Kingdom</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-gray-300">Australia</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-gray-300">Singapore</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {state.succeeded ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 text-center">
                  <h3 className="text-green-400 font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                      <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="input"
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn-primary w-full ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm