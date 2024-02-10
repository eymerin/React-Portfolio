import React from "react";
import './footer.css';
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';
import Instagram from '../../assets/Instagram.png';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="links">
                <a href="https://github.com/eymerin" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className="link"/>
                </a>
                <a href="https://www.linkedin.com/in/garrett-young-274179245/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" className="link"/>
                </a>
                <a href="https://www.instagram.com/grandeurlandscapes/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" className="link"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
