import React from 'react';
import "../../styles/ContactForm.css";

function ContactInfo() {
    return (
        <section className="contact-form-section">
            <div className="contact-form-container">

                <div className="form-heading">
                    <span>Contact Us</span>
                    <h2>Send a message</h2>

                    <p>
                        Have questions or feedback? Fill out the form below and
                        our team will get back to you as soon as possible.
                    </p>
                </div>

                <form className="contact-form">

                    <div className="input-row">
                        <div className="input-group">
                            <label>Name:</label>
                            <input type="text" placeholder="Enter your name:"/>
                        </div>

                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Enter your email:"/>
                        </div>

                        <div className="input-group">
                            <label>Subject:</label>
                            <input type="text" placeholder="Enter your subject:"/>
                        </div>

                        <div className="input-group">
                            <label>Message:</label>
                            <textarea placeholder="Enter your message:" rows="5"></textarea>
                        </div>

                        <button type="submit">
                            Send Message
                        </button>

                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactInfo;