import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again.');
        });
    };

    return (
        <div id='contactSection'>
            <h2 className="contactTitle">Contact Me</h2>
            <span className="contactDescription">Please fill out the form below to discuss any work opportunities or feel free to contact me on LinkedIn.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input name="from_name" type="text" className="name" placeholder="Enter Name" required/>
                <input name="from_email" type="email" className="email" placeholder="Enter Email" required/>
                <textarea name="message" className="message" rows="5" placeholder="Enter your message..." required></textarea>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

