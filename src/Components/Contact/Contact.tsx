import React, { useContext } from 'react'
import './Contact.css'
import MacOS from '../../assets/macOs.svg'
import { DarkModeContext } from '../../darkMode'

const Contact = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <section className={`contact-container ${darkMode ? 'homeWrap-dark' : 'homeWrap-light'}`} id="contact">
            <h1 className={`contact-title ${darkMode ? 'title-light' : 'title-dark'}`}>Contact</h1>
            <form className={`contact-form ${darkMode ? 'contact-form-dark' : 'contact-form-light'}`} action='/'>
                <div className="line">
                    <img src={MacOS} alt="macOS" className="macOS" />
                    <h2 className={`message-title ${darkMode ? 'title-light' : 'title-dark'}`}>New Message</h2>
                </div>
                <div className="line">
                    <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>Name:</label>
                    <input type="text" placeholder="Enter your name please" className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} />
                </div>
                <div className="line">
                    <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>Email:</label>
                    <input type="email" placeholder="Enter your email please" className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} />
                </div>
                <div className="message-line">
                    <textarea placeholder="Write your message here" className={`contact-input-message ${darkMode ? 'contact-input-message-dark' : 'contact-input-message-light'}`} />
                </div>
                <div className="button-line">
                    <button className={`contact-button ${darkMode ? 'contact-button-dark' : 'contact-button-light'}`} type="submit"
                    >Send</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
