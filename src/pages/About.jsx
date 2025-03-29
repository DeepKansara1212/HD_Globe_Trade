import { useEffect } from 'react'
import AboutHero from '../components/about/AboutHero.jsx'
import Story from '../components/about/Story.jsx'
import Mission from '../components/about/Mission.jsx'
import Process from '../components/about/Process.jsx'
import Team from '../components/about/Team.jsx'
import CTA from '../components/home/CTA.jsx'

const About = () => {
  useEffect(() => {
    document.title = 'About Us - HD Globe Trade'
  }, [])

  return (
    <>
      <AboutHero />
      <Story />
      <Mission />
      <Process />
      <Team />
      <CTA />
    </>
  )
}

export default About