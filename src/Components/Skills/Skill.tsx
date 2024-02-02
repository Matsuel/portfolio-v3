import React from 'react'
import "./Skills.css"
import { Skill } from './type'



const Skill = ({ image, index, darkMode, langage, skillsTypes, skillsTypesFr, skillsTypesList, imageNames }: Skill) => {
    return (
        <div className={`skill-image ${darkMode ? "skill-image-dark" : "skill-image-light"}`} key={index}>
            <img src={image} alt='skill-image' />
            <p className={`skill-name ${darkMode ? "skill-name-light" : "skill-name-dark"}`}>{imageNames[index]}</p>
            <p className={`skill-type ${darkMode ? "skill-type-light" : "skill-type-dark"}`}>
                {
                    langage === 0 ? skillsTypes[parseInt(skillsTypesList[index]) - 1] : skillsTypesFr[parseInt(skillsTypesList[index]) - 1]
                }
            </p>
        </div>
    )
}

export default Skill
