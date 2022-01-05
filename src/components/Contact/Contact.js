import React from 'react';
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_kayl7ms', e.target, 'user_yvjEW2F7m0UX6leMExcGh')
            .then((result) => {
                // console.log(result.text);
                alert('Message sent successfull.');
            }, (error) => {
                // console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className='contact'>
            <div className='container py-5'>
                <div className='row d-flex justify-content-center'>
                    <div className="col-md-10 row d-flex justify-content-center">
                        <div className="col-lg-5 mb-4 contactLeft">
                            <p className="contactLeftP mb-4 fs-1">What's Your Story? <br /> Get In Touch</p>
                            <div>
                                <p className="mb-0">Call Us</p>
                                <h2 className="mb-4">+8801971134573</h2>
                            </div>
                            <div>
                                <p className="mb-0">Email</p>
                                <h2 className="mb-4">default@gmail.com</h2>
                                <div>
                                    <p className="mb-0">Moon Street Light Avenue</p>
                                    <h2>14/05 Jupiter.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form onSubmit={sendEmail}>
                                <div className="row contactForm">
                                    <div className="col-8 w-100">
                                        <input type="text" className="form-control" placeholder="Name" name="name" required />
                                    </div>
                                    <div className="col-8 pt-2 w-100">
                                        <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                                    </div>
                                    <div className="col-8 pt-2 w-100">
                                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                                    </div>
                                    <div className="col-8 pt-3">
                                        <input type="submit" className="read-now" value="Send Message"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;