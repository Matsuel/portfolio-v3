import React from 'react'
import "./Skills.css"
import randomizeList from '../../Functions/RandomList'
import capitalizeList from '../../Functions/CapitalizeList'

const Skills = () => {
    const skillsName = [ "C++", "C#", "CSS", "Docker", ".NET", "Figma", "Github", "Golang", "HTML", "Java", "Javascript", "Linux", "MongoDB", "Netlify", "NextJS", "NodeJS", "PHP", "Python", "ReactJS", "SQLite", "Tailwind", "Typescript", "Unity", "Vercel" ]
    const images = require.context('../../assets/skillsAssets', true);
    const imagesList = randomizeList(images.keys().map((image) => images(image)));
    const imageNames = capitalizeList(imagesList.map((imagePath =>{
        const pathSegments = imagePath.split('/');
        const imageNameWithExtension = pathSegments[pathSegments.length - 1];
        const imageName = imageNameWithExtension.split('.')[0].replace(/-/g, ' ');
        return imageName;
    })));
    
    return (
        <section className='skillsWrap' id='skills'>
            <h1 className="skills-title">Skills</h1>
            {imagesList.map((image, index:number) => {
                return (
                    <div className='skill-image' key={index}>
                        <img src={image} alt='skill-image' />
                        <p className='skill-name'>{imageNames[index]}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default Skills
