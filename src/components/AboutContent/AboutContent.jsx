import React from 'react'
import Header from '../Header/Header'
import Tile from '../Tile/Tile'
import TileWrapper from '../TileWrapper/TileWrapper'

import { motion } from 'framer-motion'

import './AboutContent.css'

const AboutContent = () => {
  return (
    <motion.div className='about_content'
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
    exit={{opacity: 1}}

    >
      <Header text={"ABOUT"} />
      <TileWrapper>
        <Tile
          tile_header = {"Personal"}
          tile_text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia eget elit vitae molestie. Pellentesque iaculis neque a aliquet lobortis. Fusce feugiat, justo quis rhoncus rutrum, tellus neque iaculis nunc, eget mattis lacus ipsum porttitor nulla"}
        />
        <Tile
          tile_header = {"Experience"}
          tile_text = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
      </TileWrapper>
    </motion.div>
  )
}

export default AboutContent
