import React from 'react'
import "./Skills.css"
import randomizeList from '../../Functions/RandomList'
import capitalizeList from '../../Functions/CapitalizeList'
import { DarkModeContext } from '../../darkMode'
import { Langage } from '../../langage'
import Skill from './Skill'

const Skills = () => {
    const { darkMode } = React.useContext(DarkModeContext)
    const { langage } = React.useContext(Langage)
    const skillsTypes = ['Language', 'Framework', 'Software', 'Database', 'OS', 'Code editor', 'Versioning', 'Styling', 'Other']
    const skillsTypesFr = ['Langage', 'Framework', 'Logiciel', 'Données', 'OS', 'Editeur de code', 'Versioning', 'Stylisation', 'Autre']
    const [showMore, setShowMore] = React.useState<boolean>(false)
    const images = require.context('../../assets/skillsAssets', true);
    const imagesList = randomizeList(images.keys().map((image) => images(image)));
    const imageNames = capitalizeList(imagesList.map((imagePath => {
        const pathSegments = imagePath.split('/');
        const imageNameWithExtension = pathSegments[pathSegments.length - 1];
        const imageName = imageNameWithExtension.split('.')[0].replace(/_/g, ' ').split('-')[0]
        return imageName;
    })));

    const skillsTypesList = imagesList.map((imagePath => {
        const pathSegments = imagePath.split('/');
        const imageNameWithExtension = pathSegments[pathSegments.length - 1];
        const skillType = imageNameWithExtension.split('-')[1][0]
        return skillType;
    }));

    return (
        <section className={`skillsWrap ${darkMode ? "homeWrap-dark" : "homeWrap-light"}`} id='skills'>
            <h1 className={`skills-title ${darkMode ? "title-light" : "title-dark"}`} >
                {langage === 0 ? "Skills" : "Compétences"}
            </h1>
            {imagesList.slice(0, showMore ? imagesList.length : 6).map((image, index: number) => {
                return (
                    <Skill image={image} index={index} darkMode={darkMode} langage={langage} skillsTypes={skillsTypes} skillsTypesFr={skillsTypesFr} skillsTypesList={skillsTypesList} imageNames={imageNames} />
                )
            })
            }
            <div className="show-more">
                <button className={`show-more-button ${darkMode ? "contact-button-dark" : "contact-button-light"}`} onClick={() => setShowMore(!showMore)}>
                    {
                        showMore ? (
                            (langage === 0 ? "Show less" : "Voir moins")
                        ) : (
                            (langage === 0 ? "Show more" : "Voir plus")
                        )

                    }
                </button>
            </div>
        </section>
    )
}

export default Skills