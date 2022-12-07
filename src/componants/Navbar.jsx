import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav'>
            <Link to="/all">All</Link>
            <Link to="/html">HTML</Link>
            <Link to="css">CSS</Link>
            <Link to="js">Java Script</Link> 
        </div>
    )
}
