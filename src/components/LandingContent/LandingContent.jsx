import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import './LandingContent.css'

import { motion } from 'framer-motion'


const LandingContent = () => {
  return (
    <motion.div className='landing_content'

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      exit={{opacity: 1}}
    >
        <Header text={'WEB DEVELOPER'}/>
        <div>
            <ul>
              <li><Link to='/works'>WORKS</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
            </ul>
        </div>
    </motion.div>
  )
}

export default LandingContent