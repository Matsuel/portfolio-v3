import React, { useContext, useEffect, useRef, useState } from 'react'
import './Contact.css'
import MacOS from '../../assets/macOs.svg'
import Mac1 from '../../assets/mac1.svg'
import Mac2 from '../../assets/mac2.svg'
import Mac3 from '../../assets/mac3.svg'
import Mac1a from '../../assets/mac1a.svg'
import Mac2a from '../../assets/mac2a.svg'
import Mac3a from '../../assets/mac3a.svg'
import { DarkModeContext } from '../../darkMode'
import emailjs from '@emailjs/browser'
import dotenv from 'dotenv'

const Contact = () => {
    // dotenv.config()
    const { darkMode } = useContext(DarkModeContext)
    const formRef = useRef<HTMLFormElement>(null)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: { target: any; }) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(process.env.REACT_APP_SERVICE!, process.env.REACT_APP_TEMPLATE!, process.env.REACT_APP_PUBLIC_KEY!)

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE!,
                process.env.REACT_APP_TEMPLATE!,
                formRef.current!,
                process.env.REACT_APP_PUBLIC_KEY!
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className={`contact-container ${darkMode ? 'homeWrap-dark' : 'homeWrap-light'}`} id="contact">
            <h1 className={`contact-title ${darkMode ? 'title-light' : 'title-dark'}`}>Contact</h1>
            <form className={`contact-form ${darkMode ? 'contact-form-dark' : 'contact-form-light'}`} onSubmit={handleSubmit} ref={formRef}>
                <div className="line">
                    <div className="macOS">
                        <img src={Mac1} alt="mac1" className="mac" />
                        <img src={Mac2} alt="mac2" className="mac" />
                        <img src={Mac3} alt="mac3" className="mac" />
                    </div>
                    <h2 className={`message-title ${darkMode ? 'title-light' : 'title-dark'}`}>New Message</h2>
                </div>
                <div className="line">
                    <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>Name:</label>
                    <input type="text" placeholder="Enter your name please" className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} value={form.name} name="name" onChange={handleChange} />
                </div>
                <div className="line">
                    <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>Email:</label>
                    <input type="email" placeholder="Enter your email please" className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} value={form.email} name="email" onChange={handleChange} />
                </div>
                <div className="message-line">
                    <textarea placeholder="Write your message here" className={`contact-input-message ${darkMode ? 'contact-input-message-dark' : 'contact-input-message-light'}`} value={form.message} name="message" onChange={handleChange} />
                </div>
                <div className="button-line">
                    <button className={`contact-button ${darkMode ? 'contact-button-dark' : 'contact-button-light'}`} type="submit">Send</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
