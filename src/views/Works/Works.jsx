import React from 'react'

import Nav from '../../components/Nav/Nav'
import WorksContent from '../../components/WorksContent/WorksContent'
import Socials from '../../components/Socials/Socials'

import './Works.css'

const Works = () => {
  return (
    <div className='works_view'>
        <Nav />
        <WorksContent />
        <Socials />
    </div>
  )
}

export default Works