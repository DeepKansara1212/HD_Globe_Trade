import { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import Map from '../components/contact/Map.jsx'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - HD Globe Trade'
  }, [])

  return (
    <>
      <ContactHero />
      <ContactForm />
      <Map />
    </>
  )
}

export default Contact