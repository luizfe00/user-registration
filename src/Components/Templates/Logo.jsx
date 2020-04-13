import React from 'react'
import './Logo.css'
import Logo from '../../Assets/Images/Logo.jpeg'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>