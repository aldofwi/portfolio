import React from 'react'
import { MailChimpForm } from './MailChimpForm'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import gitLogo  from '../assets/img/gitLogo.png'
import logoA from '../assets/img/logoA_trans.png'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {

  return (

    <footer className="footer">
        <Container>
            <Row className='align-items-center'>
                <MailChimpForm />
                <Col sm={6}>
                    <img src={logoA} alt="Logo" />               
                </Col>

                <Col sm={6} className='text-center text-sm'>
                    <div className="social-icon">
                        <a href="https://github.com/aldofwi"><img src={gitLogo} alt="" /></a>
                        <a href="https://www.instagram.com/aldofwi"><img src={navIcon3} alt="" /></a>
                        <a href="https://www.linkedin.com/in/almandindominique"><img src={navIcon1} alt="" /></a>
                    </div>
                    <p>ΛDHD Copyright ©️ 2023. All Right Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>

  )
}
