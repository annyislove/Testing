import React from 'react'
import './header.css'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <>
      <header>
        <h1>Your Name</h1>
        <nav>
          <ul>
            <li><Link to='about'>About</Link></li>
            <li><Link to='/'>home</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
