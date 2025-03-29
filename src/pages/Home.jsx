import { useEffect } from 'react'
import Hero from '../components/home/Hero.jsx'
import Features from '../components/home/Features.jsx'
import Products from '../components/home/Products.jsx'
import Destinations from '../components/home/Destinations.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import CTA from '../components/home/CTA.jsx'

const Home = () => {
  useEffect(() => {
    document.title = 'HD Globe Trade - Premium Products Exports'
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Destinations />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home