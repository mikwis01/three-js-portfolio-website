import React from 'react'
import TileHeader from '../TileHeader/TileHeader'

import './Tile.css'

const Tile = (props) => {
  return (
    <div className='tile'>
        <TileHeader text={props.tile_header}/>
        <p className='tile_content'>{props.tile_text}</p>
    </div>
  )
}

export default Tile