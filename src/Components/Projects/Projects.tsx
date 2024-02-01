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
import ProjectEven from './ProjectEven'
import ProjectOdd from './ProjectOdd'

interface Project {
    title: string;
    githubLink: string;
    description: string;
    publicRepo: boolean;
}

type Props = {
    title: string;
    githubLink: string;
    description: string;
    publicRepo: boolean;
    index: number;
    Images: string[],
    darkMode: boolean,
    ViewMore: string,
    ViewLight: string,
    ViewPrivate: string,
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
                {Datas.map(({title, githubLink, description, publicRepo}: Project, index: number) => {
                    return (
                        (index % 2 !== 0) ? (
                            <ProjectOdd title={title} githubLink={githubLink} description={description} publicRepo={publicRepo} index={index} Images={Images} darkMode={darkMode} ViewMore={ViewMore} ViewLight={ViewLight} ViewPrivate={ViewPrivate} />
                        ) : (
                            <ProjectEven title={title} githubLink={githubLink} description={description} publicRepo={publicRepo} index={index} Images={Images} darkMode={darkMode} ViewMore={ViewMore} ViewLight={ViewLight} ViewPrivate={ViewPrivate} />
                        )
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
