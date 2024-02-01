import React, {FunctionComponent, SVGProps} from 'react'

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

const ProjectOdd = ({ title, githubLink, description, publicRepo, index, Images, darkMode, ViewMore, ViewLight, ViewPrivate }:Props) => {
    return (
        <div className="project" key={index}>
            <img src={Images[index]} alt="" className="project-img" />
            <div className="project-content">
                <h1 className={`project-number ${darkMode ? 'title-light' : 'title-dark'}`}>{index + 1 >= 10 ? (index + 1) : ("0" + (index + 1))}.</h1>
                <h2 className={`project-title ${darkMode ? 'title-light' : 'title-dark'}`}>{title}</h2>
                <p className="project-description">{description}</p>
                <a target='_blank' href={publicRepo ? githubLink : undefined} className="project-link"><img src={publicRepo ? darkMode ? ViewMore : ViewLight : ViewPrivate} alt="" className="project-link-img" /></a>
            </div>
        </div>
    )
}

export default ProjectOdd
