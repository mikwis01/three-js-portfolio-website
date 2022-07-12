import React from 'react'

import Nav from '../../components/Nav/Nav'
import AboutContent from '../../components/AboutContent/AboutContent'
import Socials from '../../components/Socials/Socials'

import './About.css'

const About = () => {
  return (
    <div className='about_view'>
        <Nav />
        <AboutContent />
        <Socials />
    </div>
  )
}

export default About