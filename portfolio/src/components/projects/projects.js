import React from "react";
import './projects.css';
import ProjectPic from '../../assets/projectPic-1.png';
import ProjectPic2 from '../../assets/projectPic-2.png';
import ProjectPic3 from '../../assets/projectPic-3.png';
import ProjectPic4 from '../../assets/projectPic-4.png';
import ProjectPic5 from '../../assets/projectPic-5.png';
import ProjectPic6 from '../../assets/projectPic-6.png';
import ProjectPic7 from '../../assets/projectPic-7.png';
import ProjectPic8 from '../../assets/projectPic-8.png';

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDescription">Below are a few of my projects ranging from simple HTML pages to progressive web applications using the MERN stack and everywhere in between. Project files for these and many more can be found on my Github.</span>
            <div className="projectsImgs">
                <a href="https://github.com/eymerin/Express-Note-Taker" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic} alt="" className="projectsImg"/>
                    <span className="projectLabel">Note Taker</span>
                </a>
                <a href="https://github.com/eymerin/PWA-Text-Editor" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic2} alt="" className="projectsImg"/>
                    <span className="projectLabel">PWA Text Editor</span>
                </a>
                <a href="https://github.com/eymerin/NoSQL-Social-Network-API" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic3} alt="" className="projectsImg"/>
                    <span className="projectLabel">NoSQL Social Network API</span>
                </a>
                <a href="https://github.com/eymerin/Weather-Dashboard" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic4} alt="" className="projectsImg"/>
                    <span className="projectLabel">Weather Dashboard</span>
                </a>
                <a href="https://github.com/eymerin/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic5} alt="" className="projectsImg"/>
                    <span className="projectLabel">Workday Scheduler</span>
                </a>
                <a href="https://github.com/eymerin/TTRPG-Inventory-Bot" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic6} alt="" className="projectsImg"/>
                    <span className="projectLabel">Discord Bot Inventory App</span>
                </a>
                <a href="https://github.com/eymerin/JSQuiz" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic7} alt="" className="projectsImg"/>
                    <span className="projectLabel">Javascript Quiz</span>
                </a>
                <a href="https://github.com/eymerin/Password-Generator" target="_blank" rel="noopener noreferrer" className="projectItem">
                    <img src={ProjectPic8} alt="" className="projectsImg"/>
                    <span className="projectLabel">Password Generator</span>
                </a>
            </div>
        </div>
    );
}

export default Projects;
