import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><h1>Books App</h1></div>
      <div>
        <Link to="/favourites">
        <h3>Your Favourites</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
