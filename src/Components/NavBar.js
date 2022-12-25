import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import gitLogo  from '../assets/img/gitLogo.png'
import logoA from '../assets/img/logoA_trans.png'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if( window.scrollY > 50 ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () =>  window.removeEventListener("scroll", onScroll);

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (

        <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
          <Container>
            <Navbar.Brand href="#home">
                <img src={logoA} alt="LogoA" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>                
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
              </Nav>

              <span className='navbar-text'>
                <div className="social-icon">
                    <a href="https://github.com/aldofwi"><img src={gitLogo} alt="" /></a>
                    <a href="https://www.instagram.com/aldofwi"><img src={navIcon3} alt="" /></a>
                    <a href="https://www.linkedin.com/in/almandindominique/"><img src={navIcon1} alt="" /></a>
                </div>
                <button>
                  <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}><span>Let's Connect</span></Nav.Link>
                </button>
              </span>

            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
