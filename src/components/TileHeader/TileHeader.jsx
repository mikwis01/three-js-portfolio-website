import React from 'react'
import './TileHeader.css'

const TileHeader = (props) => {
  return (
    <p className='tile_header'>{props.text}</p>
  )
}

export default TileHeader