import React from 'react'
import './Contact.css'
import MacOS from '../../assets/macOs.svg'

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <h1 className="contact-title">Contact</h1>
            <form className="contact-form" action='/'>
                <div className="line">
                    <img src={MacOS} alt="macOS" className="macOS" />
                    <h2 className="message-title">New Message</h2>
                </div>
                <div className="line">
                    <label className='label'>Name:</label>
                    <input type="text" placeholder="Enter your name please" className="contact-input" />
                </div>
                <div className="line">
                    <label className='label'>Email:</label>
                    <input type="email" placeholder="Enter your email please" className="contact-input" />
                </div>
                <div className="message-line">
                    <textarea placeholder="Write your message here" className="contact-input-message" />
                </div>
                <div className="button-line">
                    <button className="contact-button">Send</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
