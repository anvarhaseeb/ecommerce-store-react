import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <header className='header'>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>
          <h1>Lumin Store</h1>
          </Link>
      
      <Link to ='./logout'>
      <button className='logout-btn'>Log out</button></Link>
      
      </header>
    </div>
  )
}

export default Header
