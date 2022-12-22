import React from 'react'
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css'
import TrackVisibility from 'react-on-screen'

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed suscipit eros. Cras a sagittis ex. Morbi sed porttitor velit. Phasellus ac facilisis nisl. Integer imperdiet, justo quis consectetur tristique, lectus nunc elementum urna, cursus sagittis metus est id nibh. Nam purus dolor, tincidunt sed turpis nec, interdum euismod lorem. Fusce imperdiet ullamcorper felis, ut tincidunt orci fringilla eu. Mauris efficitur, libero vitae placerat tempor, turpis arcu ultrices odio, vitae molestie urna est sit amet nunc. Nullam a felis sed ligula rutrum placerat id nec tellus. In faucibus nisi nec efficitur scelerisque. Donec neque nunc, accumsan a neque sit amet, posuere eleifend dolor. Fusce sit amet pulvinar lacus.</p>
                </div> }
                </TrackVisibility>
                        
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image0" />
                                <h5>Quality Assurance</h5>
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
