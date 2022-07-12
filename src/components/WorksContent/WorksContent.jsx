import React from 'react'
import Header from '../Header/Header'
import Tile from '../Tile/Tile'
import TileWrapper from '../TileWrapper/TileWrapper'

import { motion } from 'framer-motion'

import './WorksContent.css'

const WorksContent = () => {
  return (
    <motion.div className='works_content'
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
    exit={{opacity: 1}}
    
    >
      <Header text={"WORKS"} />
      <TileWrapper>
        <a href='#'>
          <Tile 
            tile_header = {"Name"}
            tile_text = {"used tech stack"}
          />
        </a>
        <a href='#'>
          <Tile 
            tile_header = {"Name"}
            tile_text = {"used tech stack"}
          />
        </a>
      </TileWrapper>
    </motion.div>
  )
}

export default WorksContent