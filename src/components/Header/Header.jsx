import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <h1 className='main_header'>
        {props.text}
    </h1>
  )
}

export default Header