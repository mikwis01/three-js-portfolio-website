import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber';
import AnimatedSphere from '../../components/AnimatedSphere/AnimatedSphere';

import Nav from '../../components/Nav/Nav'
import LandingContent from '../../components/LandingContent/LandingContent'
import Socials from '../../components/Socials/Socials'

import { motion } from 'framer-motion'

import './Landing.css'

const MainView = () => {
  return (
    <div className='main_view'>

        <motion.div className="canvas_wrapper"
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        exit={{opacity: 1}}
        
        >
          <Canvas>
            <ambientLight intensity={25}/>
            <pointLight position={[200, 200, 200]} intensity={1} />
            <pointLight position={[-10, 0, 2]} intensity={1} />
            <Suspense fallback={null} >
              <AnimatedSphere />
            </Suspense>
          </Canvas>
        </motion.div>

        <Nav />
        <LandingContent />
        <Socials />
    </div>
  )
}

export default MainView