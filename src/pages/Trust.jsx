import { useEffect } from 'react'
import TrustHero from '../components/trust/TrustHero.jsx'
import Certifications from '../components/trust/Certifications.jsx'
import QualityControl from '../components/trust/QualityControl.jsx'
import Partners from '../components/trust/Partners.jsx'
import Testimonials from '../components/trust/Testimonials.jsx'
import CTA from '../components/home/CTA.jsx'

const Trust = () => {
  useEffect(() => {
    document.title = 'Trust & Certifications - HD Globe Trade'
  }, [])

  return (
    <>
      <TrustHero />
      <Certifications />
      <QualityControl />
      <Partners />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Trust