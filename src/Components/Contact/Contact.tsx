import React from 'react'
import './Contact.css'
import MacOS from '../../assets/macOs.svg'

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-form">
                <div className="line">
                    <img src={MacOS} alt="macOS" className="macOS" />
                    <h2 className="message-title">New Message</h2>
                </div>
                <div className="line">
                    <label className='label'>Name</label>
                    <input type="text" placeholder="Name" className="contact-input" />
                </div>
                <div className="line">
                    <label className='label'>Email</label>
                    <input type="email" placeholder="Email" className="contact-input" />
                </div>
                <div className="message-line">
                    <textarea placeholder="Message" className="contact-input-message" />
                </div>
                


            </div>

        </section>
    )
}

export default Contact
