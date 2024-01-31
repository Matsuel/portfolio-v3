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
import { Langage } from '../../langage'
import emailjs from '@emailjs/browser'
import dotenv from 'dotenv'

const Contact = () => {
    const [formOpen, setFormOpen] = useState(true);
    const { darkMode } = useContext(DarkModeContext)
    const { langage } = useContext(Langage)
    const formRef = useRef<HTMLFormElement>(null)
    const [error, setError] = useState(0)
    const [sending, setSending] = useState(false)
    const defaultFormState = {
        name: "",
        email: "",
        message: "",
    };
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
        if (form.name === "" || form.email === "" || form.message === "") {
            setSending(true)
            setError(3)
            showMessage()
            return
        } else {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE!,
                    process.env.REACT_APP_TEMPLATE!,
                    formRef.current!,
                    process.env.REACT_APP_PUBLIC_KEY!
                )
                .then(
                    (result) => {
                        setSending(true)
                        setError(1)
                        showMessage()
                        setForm(defaultFormState)
                    },
                    (error) => {
                        setSending(true)
                        setError(2)
                        showMessage()
                        setForm(defaultFormState)
                    }
                );
        }
    };

    const showMessage = () => {
        setTimeout(() => {
            setSending(false)
        }, 10000);
    }

    return (
        <section className={`contact-container ${darkMode ? 'homeWrap-dark' : 'homeWrap-light'}`} id="contact">
            <h1 className={`contact-title ${darkMode ? 'title-light' : 'title-dark'}`}>Contact</h1>
            <form className={`contact-form ${darkMode ? 'contact-form-dark' : 'contact-form-light'}`} onSubmit={handleSubmit} ref={formRef}>
                <div className="line">
                    <div className="macOS">
                        <img src={Mac1} alt="mac1" className="mac" onMouseOver={(e) => (e.currentTarget.src = Mac1a)} onMouseOut={(e) => (e.currentTarget.src = Mac1)} onClick={() => setForm(defaultFormState)} />
                        <img src={Mac2} alt="mac2" className="mac" onMouseOver={(e) => (e.currentTarget.src = Mac2a)} onMouseOut={(e) => (e.currentTarget.src = Mac2)} onClick={() => setFormOpen(false)} />
                        <img src={Mac3} alt="mac3" className="mac" onMouseOver={(e) => (e.currentTarget.src = Mac3a)} onMouseOut={(e) => (e.currentTarget.src = Mac3)} onClick={() => setFormOpen(true)} />
                    </div>
                    <h2 className={`message-title ${darkMode ? 'title-light' : 'title-dark'}`}>
                        {langage === 0 ? "New message" : "Nouveau message"}
                    </h2>
                </div>
                {formOpen ? (
                    <>
                        <div className="line">
                            <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>
                                {langage === 0 ? "Name:" : "Nom:"}
                            </label>
                            <input type="text" placeholder={langage === 0 ? "Enter your name please" : "Entrez votre nom s'il vous plait"} 
                            className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} value={form.name} name="name" onChange={handleChange} />
                        </div>
                        <div className="line">
                            <label className={`label ${darkMode ? 'title-light' : 'title-dark'}`}>Email:</label>
                            <input type="email" placeholder={langage === 0 ? "Enter your email please" : "Entrez votre email s'il vous plait"}
                            className={`contact-input ${darkMode ? 'title-light' : 'title-dark'}`} value={form.email} name="email" onChange={handleChange} />
                        </div>
                        <div className="message-line">
                            <textarea placeholder={langage === 0 ? "Enter your message please" : "Entrez votre message s'il vous plait"}
                            className={`contact-input-message ${darkMode ? 'contact-input-message-dark' : 'contact-input-message-light'}`} value={form.message} name="message" onChange={handleChange} />
                        </div>
                        <div className="button-line">
                            <button className={`contact-button ${darkMode ? 'contact-button-dark' : 'contact-button-light'}`} type="submit">
                                {langage === 0 ? "Send" : "Envoyer"}
                            </button>
                        </div>
                    </>
                ) : ("")}
            </form>
            {sending ? (
                <div className="message-sent">
                    {error === 1 ? (
                        <>
                            <video src={require('../../assets/success.webm')} autoPlay loop muted className='video-success' />
                            <h2 className={`message-sent-title `}>Message Sent !</h2>
                        </>
                    ) : (
                        <>
                            <video src={require('../../assets/error.webm')} autoPlay loop muted className='video-error' />
                            <h2 className={`message-sent-title`}>{error === 3 ? "Please fill all the fields !" : "Message not sent try again later !"}</h2>
                        </>
                    )}
                </div>
            ) : (
                ""
            )}
        </section>
    )
}

export default Contact
