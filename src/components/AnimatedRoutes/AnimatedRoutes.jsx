import React from 'react'

import { Routes, Route, useLocation } from 'react-router-dom';

import Landing from '../../views/Landing/Landing';
import About from '../../views/About/About';
import Works from '../../views/Works/Works';
import ErrorPage from '../../views/ErrorPage/ErrorPage';

import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/works" element={<Works />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes