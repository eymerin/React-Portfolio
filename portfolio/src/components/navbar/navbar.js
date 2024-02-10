import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { NavLink as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // This will be called when any link is clicked
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" onClick={toggleMenu} />

            <div className={`desktopMenu ${isMenuOpen ? 'open' : ''}`}>
                <RouterLink to="/" className="desktopMenuListItem" activeClassName="active" onClick={closeMenu}>Home</RouterLink>
                <RouterLink to="/about" className="desktopMenuListItem" activeClassName="active" onClick={closeMenu}>About</RouterLink>
                <RouterLink to="/resume" className="desktopMenuListItem" activeClassName="active" onClick={closeMenu}>Resume</RouterLink>
                <RouterLink to="/portfolio" className="desktopMenuListItem" activeClassName="active" onClick={closeMenu}>Portfolio</RouterLink>
                <RouterLink to="/contact" className="desktopMenuListItem" activeClassName="active" onClick={closeMenu}>Contact</RouterLink>
            </div>
        </nav>
    );
};

export default Navbar;

