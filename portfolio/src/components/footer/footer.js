import React from "react";
import './footer.css';
import GitHub from '../../assets/GitHub.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Instagram from '../../assets/Instagram.png'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="links">
                <img src={GitHub} alt="GitHub" className="link"/>
                <img src={LinkedIn} alt="LinkdIn" className="link"/>
                <img src={Instagram} alt="Instagram" className="link"/>
            </div>
        </footer>
    )
}

export default Footer;