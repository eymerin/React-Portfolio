import React from 'react';
import './intro.css';
import bg from '../../assets/photo.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <br/>
                <br/>
                <br/>
                <span className='hello'>Hello, </span>
                <span className='introText'>I'm <span className='introName'>Garrett</span><br />Full Stack Developer</span>
                <p className='introParagraph'>I am a skilled Software Developer and Game Designer <br/> with project management experience.</p>
                <Link><button className='btn'><img className='btnImg' src={btnImg} alt='Hire Me'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Portrait' className='bg'/>
        </section>
    )
}

export default Intro;