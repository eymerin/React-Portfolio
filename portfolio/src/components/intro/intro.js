import React from 'react';
import './intro.css';
import bg from '../../assets/photo.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div id="intro">
            <div className='introContent'>
                <span className='hello'>Hello, </span>
                <span className='introText'>I'm <span className='introName'>Garrett</span><br />Full Stack Developer</span>
                <p className='introParagraph'>I am a skilled Software Developer and Game Designer with project management experience.</p>
                <Link to="hireme" spy={true} smooth={true} offset={-100} duration={500}>
                    <button className='btn'><img className='btnImg' src={btnImg} alt='Hire Me'/>Hire Me</button>
                </Link>
            </div>
            <img src={bg} alt='Portrait' className='bg'/>
        </div>
    )
}

export default Intro;