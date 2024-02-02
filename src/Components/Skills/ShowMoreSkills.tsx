import React from 'react'
import { ShowMore } from './type'

const ShowMoreSkills = ({ showMore, setShowMore, darkMode, langage }: ShowMore) => {
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

export default ShowMoreSkills
