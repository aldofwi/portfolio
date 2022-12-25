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

    <section className='skill' id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">

                    <TrackVisibility>
                    {({ isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Skills</h2>
                      </div> }
                      </TrackVisibility>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed suscipit eros. Cras a sagittis ex. Morbi sed porttitor velit. Phasellus ac facilisis nisl. Integer imperdiet, justo quis consectetur tristique, lectus nunc elementum urna, cursus sagittis metus est id nibh. Nam purus dolor, tincidunt sed turpis nec, interdum euismod lorem. Fusce imperdiet ullamcorper felis, ut tincidunt orci fringilla eu. Mauris efficitur, libero vitae placerat tempor, turpis arcu ultrices odio, vitae molestie urna est sit amet nunc. Nullam a felis sed ligula rutrum placerat id nec tellus. In faucibus nisi nec efficitur scelerisque. Donec neque nunc, accumsan a neque sit amet, posuere eleifend dolor. Fusce sit amet pulvinar lacus.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={webdev} alt="Webdev" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={quality} alt="Quality" />
                                <h5>Quality Assurance</h5>
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
