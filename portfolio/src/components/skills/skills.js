import React from 'react';
import './skills.css';
import WebDesign from '../../assets/webDesign.png';
import AppDesign from '../../assets/appDesign.png';
import Database from '../../assets/database.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills</span>
            <span className='skillDescription'>I have had the opportunity to work with a wide range of technologies of the past few years. 
            After getting my Bachelor's Degree in Game Design I added to it a Full Stack Development Certificate. 
            My passion is designing beautiful, responsive, and engaging experiences for users.
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>I am an experienced designer with an eye for detail and a passion for clean, easy-to-use interfaces. HTML, CSS, Javascript, React, Bootstrap, Tailwind, and the Adobe Suite are my main tools for this.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Database} alt='Database' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Database Management</h2>
                        <p>I am comfortable creating and maintaining websites and have experience with MySQL, Sequelize, and MongoDB.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Development</h2>
                        <p>even more text than that</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;