import React from 'react'
import './TileWrapper.css'

const TileWrapper = ({children}) => {
  return (
    <div className='tile_wrapper'>
      {children}
    </div>
  )
}

export default TileWrapper