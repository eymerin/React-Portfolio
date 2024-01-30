import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contactImg.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo">logo</img>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="contact" className="desktopMenuImg">Contact Me</img>
            </button>
        </nav>
    )
}

export default Navbar;