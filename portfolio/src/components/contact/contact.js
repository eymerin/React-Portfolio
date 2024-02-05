import React from "react";
import './contact.css';


const Contact = () => {
    return (
        <div id='contactSection'>                
            <h2 className="contactTitle">Contact Me</h2>
            <span className="contactDescription">Please fill out the form below to discuss any work opportunities or feel free to contact me on LinkedIn.</span>
            <form className="contactForm">
                <input name="name" type="text" className="name" placeholder="Enter Name"/>
                <input name="email" type="email" className="email" placeholder="Enter Email"/>
                <textarea name="message" className="message" rows="5" placeholder="Enter your message..."></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;