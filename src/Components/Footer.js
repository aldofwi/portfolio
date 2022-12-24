import React from 'react'
import { MailChimpForm } from './MailChimpForm'
import logo     from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {

  return (

    <footer className="footer">
        <Container>
            <Row className='align-items-center'>
                {/* <MailChimpForm /> */} 
                <MailChimpForm />
                <Col sm={6}>
                    <strong><h1>{`ΛD`}</h1></strong>
                    <img src={logo} alt="Logo" />               
                </Col>
                <Col sm={6} className='text-center text-sm'>
                    <div className="social-icon">
                        <a href="/"><img src={navIcon1} alt="" /></a>
                        <a href="/"><img src={navIcon2} alt="" /></a>
                        <a href="/"><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>ΛD Copyright ©️ 2023. All Right Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>

  )
}
