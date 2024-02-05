import React from 'react';
import './intro.css';
import bg from '../../assets/photo.png';
import btnImg from '../../assets/hireme.png'
import { Link as ScrollLink } from 'react-scroll';

const Intro = () => {
    return (
        <div id="intro">
            <div className='introContent'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <span className='hello'>Hello, </span>
                <span className='introText'>I'm <span className='introName'>Garrett</span><br />Full Stack Developer</span>
                <p className='introParagraph'>I am a skilled Software Developer and Game Designer with project management experience.</p>
                <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <button className='btn'><img className='btnImg' src={btnImg} alt='Hire Me'/>Hire Me</button>
                </ScrollLink>
            </div>
            <img src={bg} alt='Portrait' className='bg'/>
        </div>
    )
}

export default Intro;