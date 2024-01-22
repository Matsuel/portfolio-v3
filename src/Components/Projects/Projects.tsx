import React from 'react'
import './Projects.css'
import { Datas } from './datas'
import AppMeteo from '../../assets/projects/app meteo csharp.png'
import Calc from '../../assets/projects/csharp calc.png'
import LeRebot from '../../assets/projects/lerobot.png'
import Portfolio from '../../assets/projects/portfolio v2.png'
import Taquin from '../../assets/projects/taquin.png'
import Whatsapp from '../../assets/projects/whatsapp.png'

interface Project {
    title: string;
    githubLink: string;
    description: string;
}

const Projects = () => {
    const Images = [Portfolio, Whatsapp, AppMeteo, LeRebot, Calc, Taquin]
    return (
        <section id='projects' className='projects'>
            <h1 className="projects-title">Projects</h1>
            <div className='projects-container'>
                {Datas.map((project: Project, index: number) => {
                    return (
                        <div className="project">
                            <img src={Images[index]} alt="" className="project-img" />
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <a href={project.githubLink} className="project-link">Voir le projet</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects