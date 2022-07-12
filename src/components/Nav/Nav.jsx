import React from 'react';
import { Link } from 'react-router-dom'

import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <h2>
          <Link to='/'>
              MIKOŁAJ <br></br>
              WIŚNIEWSKI
          </Link>
        </h2>
    </nav>
  )
}

export default Nav