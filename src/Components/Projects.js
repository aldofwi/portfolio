import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Col, Nav, Tab, TabContainer, Container, Row } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Projects = () => {

    const projects = [
        {
            title: "Business Start-Up",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Start-Up",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Start-Up",
            description: "Design & Development",
            imgUrl: projImg3,
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed suscipit eros. Cras a sagittis ex. Morbi sed porttitor velit. Phasellus ac facilisis nisl. Integer imperdiet, justo quis consectetur tristique, lectus nunc elementum urna, cursus sagittis metus est id nibh. Nam purus dolor, tincidunt sed turpis nec, interdum euismod lorem.</p>

                    <TabContainer id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
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
                        <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
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
