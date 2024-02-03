import React from "react";
import './projects.css';
import ProjectPic from '../../assets/projectPic-1.png'
import ProjectPic2 from '../../assets/projectPic-2.png'
import ProjectPic3 from '../../assets/projectPic-3.png'
import ProjectPic4 from '../../assets/projectPic-4.png'
import ProjectPic5 from '../../assets/projectPic-5.png'
import ProjectPic6 from '../../assets/projectPic-6.png'

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDescription">Description of Section</span>
            <div className="projectsImgs">
                <img src={ProjectPic} alt="" className="projectsImg"/>
                <img src={ProjectPic2} alt="" className="projectsImg"/>
                <img src={ProjectPic3} alt="" className="projectsImg"/>
                <img src={ProjectPic4} alt="" className="projectsImg"/>
                <img src={ProjectPic5} alt="" className="projectsImg"/>
                <img src={ProjectPic6} alt="" className="projectsImg"/>
            </div>
        </section>
    )
}

export default Projects;