import React from 'react'
import { ShowMoreProjectsProps } from './types'

const ShowMoreProjects = ({ showMore, setShowMore, langage, darkMode }: ShowMoreProjectsProps) => {
    return (
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
    )
}

export default ShowMoreProjects
