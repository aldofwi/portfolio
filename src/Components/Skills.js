import React from 'react'
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import design from "../assets/img/pic_design.png";
import project from "../assets/img/pic_project.png";
import quality from "../assets/img/pic_quality.png";
import rocket from "../assets/img/pic_rocket.png";
import webdev from "../assets/img/pic_webdev.png";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (

    <section className='project' id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="project-bx">

                    <TrackVisibility>
                    {({ isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Skills</h2>
                      </div> }
                      </TrackVisibility>
                        <p>During the last decade, I began to work as a Full-Time Software Developer (2010-2014) after 3 years of apprenticeship. Afterwards, I had the opportunity to be a Project Leader and keep programming on the projects I was responsible of (2014-2016). Then, I followed a training to learn Quality Assurance and control the rendering of all products.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={webdev} alt="Webdev" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={project} alt="Project" />
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={design} alt="Design" />
                                <h5>Web Design</h5>
                            </div>
                            <div className="item">
                                <img src={quality} alt="Quality" />
                                <h5>Quality Assurance</h5>
                            </div>
                            <div className="item">
                                <img src={rocket} alt="Rocket" />
                                <h5>Brand Identity</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>

  )
}
