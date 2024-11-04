import React from 'react'
import { Link } from 'react-router-dom'

function Topnavagation() {
  return (
    <nav className='navDiv'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">signup</Link>
    </nav>
  )
}

export default Topnavagation
