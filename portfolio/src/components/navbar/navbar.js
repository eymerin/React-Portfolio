import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link to="intro" smooth={true} className="desktopMenuListItem">Home</Link>
                <RouterLink to="/about" className="desktopMenuListItem">About</RouterLink>
                <RouterLink to="/portfolio" className="desktopMenuListItem">Portfolio</RouterLink>
                <RouterLink to="/contact" className="desktopMenuListItem">Contact</RouterLink>
            </div>
            <br/>
        </nav>
    )
}

export default Navbar;