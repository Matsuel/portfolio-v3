import React from 'react'
import "./Skills.css"
import randomizeList from '../../Functions/RandomList'
import capitalizeList from '../../Functions/CapitalizeList'
import { DarkModeContext } from '../../darkMode'

const Skills = () => {
    const { darkMode } = React.useContext(DarkModeContext)
    const skillsTypes = ['Language', 'Framework', 'Software', 'Database', 'OS', 'Code editor', 'Versioning', 'Styling', 'Other']
    const images = require.context('../../assets/skillsAssets', true);
    const imagesList = randomizeList(images.keys().map((image) => images(image)));
    const imageNames = capitalizeList(imagesList.map((imagePath =>{
        const pathSegments = imagePath.split('/');
        const imageNameWithExtension = pathSegments[pathSegments.length - 1];
        const imageName = imageNameWithExtension.split('.')[0].replace(/_/g, ' ').split('-')[0]
        return imageName;
    })));

    const skillsTypesList = imagesList.map((imagePath =>{
        const pathSegments = imagePath.split('/');
        const imageNameWithExtension = pathSegments[pathSegments.length - 1];
        const skillType = imageNameWithExtension.split('-')[1][0]
        return skillType;
    }));
    
    return (
        <section className={`skillsWrap ${darkMode ? "homeWrap-dark" : "homeWrap-light"}`} id='skills'>
            <h1 className={`skills-title ${darkMode ? "title-light" : "title-dark"}`} >Skills</h1>
            {imagesList.map((image, index:number) => {
                return (
                    <div className={`skill-image ${darkMode ? "skill-image-dark" : "skill-image-light"}`} key={index}>
                        <img src={image} alt='skill-image' />
                        <p className={`skill-name ${darkMode ? "skill-name-light" : "skill-name-dark"}`}>{imageNames[index]}</p>
                        <p className={`skill-type ${darkMode ? "skill-type-light" : "skill-type-dark"}`}
                        >{skillsTypes[parseInt(skillsTypesList[index])-1]}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default Skills