import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Col, Nav, Tab, TabContainer, Container, Row } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png";
import dariddima1 from "../assets/img/dariddima-1.png";
import dariddima2 from "../assets/img/dariddima-2.png";
import dariddima3 from "../assets/img/dariddima-3.png";
import amazing1 from "../assets/img/clone-1.png";
import amazing2 from "../assets/img/clone-2.png";
import amazing3 from "../assets/img/clone-3.png";
import deelle1 from "../assets/img/deelle-1.png";
import deelle2 from "../assets/img/deelle-2.png";
import deelle3 from "../assets/img/deelle-3.png";
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Projects = () => {

    const project1 = [
        {
            title: "DaRiddima",
            description: "Homepage",
            imgUrl: dariddima1,
        },
        {
            title: "DaRiddima",
            description: "Pricing",
            imgUrl: dariddima2,
        },
        {
            title: "DaRiddima",
            description: "Discover",
            imgUrl: dariddima3,
        },
    ];

    const project2 = [
        {
            title: "Amazing",
            description: "Homepage",
            imgUrl: amazing1,
        },
        {
            title: "Amazing",
            description: "Basket",
            imgUrl: amazing2,
        },
        {
            title: "Amazing",
            description: "Orders",
            imgUrl: amazing3,
        },
    ];

    const project3 = [
        {
            title: "Déelle",
            description: "Homepage",
            imgUrl: deelle1,
        },
        {
            title: "Déelle",
            description: "Playlist",
            imgUrl: deelle2,
        },
        {
            title: "Déelle",
            description: "Discover",
            imgUrl: deelle3,
        },
    ];

  return (

    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <div className="project-bx">

                <TrackVisibility>
                    {({ isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        
                        <h2>Projects</h2>
                        
                    </div> }
                    </TrackVisibility>
                    <p>Over the time, I always kept coding whether in enterprise or as a freelance. Recently, I built some personal projects.</p>
                    <p>First, I implemented a card game which allows four players to discuss, play online and check the scoresheet. Next, I had to develop an e-commerce website for a client so I inspire myself from an <a href='https://amazing-16b7c.web.app/' target="_blank" rel="noreferrer">Amazon Clone</a> I built from scratch.</p> 
                    <p>Finally, I made two websites for artists : <a href='https://aldofwi.github.io/dariddima/' target="_blank" rel="noreferrer">DaRiddima</a> for selling instrumental music and the other to discover <a href='https://aldofwi.github.io/deelle/' target="_blank" rel="noreferrer">Déelle</a> a stand-up artist and her main performances.</p>

                    <TabContainer id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">DaRiddima</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Amazing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Déelle</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    project1.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project} 
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    project2.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project} 
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    project3.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project} 
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </TabContainer>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} alt="" className='background-image-right' />
    </section>

  )
}
