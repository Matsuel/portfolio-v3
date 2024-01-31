import React, { useContext } from 'react'
import './Projects.css'
import { Datas } from './datas'
import AppMeteoMobile from '../../assets/projects/wheathermobile.png'
import AppMeteo from '../../assets/projects/app meteo csharp.png'
import Calc from '../../assets/projects/csharp calc.png'
import Forum from '../../assets/projects/forum.png'
import HangmanClassic from '../../assets/projects/hangman-classic.png'
import HangmanWeb from '../../assets/projects/hangman-web.png'
import LeRebot from '../../assets/projects/lerobot.png'
import Portfolio from '../../assets/projects/portfolio v2.png'
import Taquin from '../../assets/projects/taquin.png'
import Whatsapp from '../../assets/projects/whatsapp.png'
import ViewMore from '../../assets/view.svg'
import ViewLight from '../../assets/viewLight.svg'
import ViewPrivate from '../../assets/viewPrivate.svg'
import { DarkModeContext } from '../../darkMode'
import { Langage } from '../../langage'

interface Project {
    title: string;
    githubLink: string;
    description: string;
    public: boolean;
}

const Projects = () => {
    const { darkMode } = useContext(DarkModeContext)
    const { langage } = useContext(Langage)
    const Images = [Portfolio, Whatsapp, AppMeteoMobile, LeRebot, Calc, Taquin, AppMeteo, HangmanWeb, HangmanClassic, Forum]
    return (
        <section id='projects' className={`projects ${darkMode ? 'homeWrap-dark' : 'homeWrap-light'}`} >
            <h1 className={`projects-title ${darkMode ? 'title-light' : 'title-dark'}`}>
                {langage === 0 ? "Projects" : "Projets"}
            </h1>
            <div className='projects-container'>
                {Datas.map((project: Project, index: number) => {
                    return (
                        (index % 2 !== 0) ? (
                            <div className="project">
                                <img src={Images[index]} alt="" className="project-img" />
                                <div className="project-content">
                                    <h1 className={`project-number ${darkMode ? 'title-light' : 'title-dark'}`}>{index+1 >= 10 ? (index+1): ("0"+ (index+1))}.</h1>
                                    <h2 className={`project-title ${darkMode ? 'title-light' : 'title-dark'}`}>{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <a target='_blank' href={project.public ? project.githubLink : undefined} className="project-link"><img src={project.public? darkMode? ViewMore:ViewLight:ViewPrivate} alt="" className="project-link-img" /></a>
                                </div>
                            </div>
                        ) : (
                            <div className="project">
                                <div className="project-content">
                                <h1 className={`project-number ${darkMode ? 'title-light' : 'title-dark'}`}>{index+1 >= 10 ? (index+1): ("0"+ (index+1))}.</h1>
                                    <h2 className={`project-title ${darkMode ? 'title-light' : 'title-dark'}`}>{project.title}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <a target='_blank' href={project.public ? project.githubLink : undefined} className="project-link"><img src={project.public? darkMode? ViewMore:ViewLight:ViewPrivate} alt="" className="project-link-img" /></a>
                                </div>
                                <img src={Images[index]} alt="" className="project-img" />
                            </div>
                        )
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
