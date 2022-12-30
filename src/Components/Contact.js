import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import contactImg from "../assets/img/contact-nobg.png";
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Contact = () => {

    const formInitialDetails = {
        firstName:  '',
        lastName:   '',
        email:      '',
        phone:      '',
        message:    ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // Request API --> Async Method
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending ...");

        let reponse = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Send");

        // let result = reponse.json();
        setFormDetails(formInitialDetails);
        
        if (reponse.status === 200) {
            setStatus({success: true, message: 'Message sent successfully!'});
        } else {
            setStatus({success: false, message: 'Something went wrong, please try again later.'});
        }
    }

  return (

    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                </Col>
                <Col md={6}>
                <TrackVisibility>
                    {({ isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                        <h2>Get In Touch</h2>
                    </div>}
                </TrackVisibility>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className='px-1'>
                                <input 
                                    type="text" 
                                    value={formDetails.firstName}
                                    placeholder='First Name'
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                            </Col>
                            <Col md={6} className='px-1'>
                                <input 
                                    type="text" 
                                    value={formDetails.lastName}
                                    placeholder='Last Name'
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                            </Col>
                            <Col md={6} className='px-1'>
                                <input 
                                    type="email" 
                                    value={formDetails.email}
                                    placeholder='Email'
                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                            </Col>
                            <Col md={6} className='px-1'>
                                <input 
                                    type="tel" 
                                    value={formDetails.phone}
                                    placeholder='Phone'
                                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                            </Col>
                            <Col>
                                <textarea 
                                    row="6" 
                                    value={formDetails.message} 
                                    placeholder='Message'
                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>
                                                {status.message}
                                            </p>
                                        </Col>
                                    }
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>                        
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

    </section>

  )
}
