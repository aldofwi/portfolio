import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
import { CupHot } from "react-bootstrap-icons"
import headerImg from "../assets/img/laptop-desk.png"
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Banner = () => {

    const period = 2000;
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "QA Engineer", "Project Leader"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        // Delta is our interval.

        return () => { clearInterval(ticker) };
        // Clear interval when component unmount.

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])
    // Return it every time the TEXT get updated.

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

  return (

    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__headShake" : ""}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm ΛD `}</h1><h1>➖<span className='wrap'>{text}</span>➖</h1>
                        <p>Computer science engineering graduate, with around 12 years of working experience. I completed my graduation in 2006 from Velizy Technological University near Versailles and also in 2009 from University  of Paris XII ESIAG. Started my career at one of the biggest french Bank. (2006-2010), currently working as a Full Stack Engineer (NextJS) in Freelance.</p>
                        
                        <a href="https://www.buymeacoffee.com/aldofwi" target="_blank" rel="noreferrer">

                            Buy me a coffee 
                            
                            <CupHot size={25} />
                        </a>
                    </div> }
                    </TrackVisibility>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>

  )
}
