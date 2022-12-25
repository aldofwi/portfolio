import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed suscipit eros. Cras a sagittis ex. Morbi sed porttitor velit. Phasellus ac facilisis nisl. Integer imperdiet, justo quis consectetur tristique, lectus nunc elementum urna, cursus sagittis metus est id nibh. Mauris efficitur, libero vitae placerat tempor, turpis arcu ultrices odio, vitae molestie urna est sit amet nunc.</p>
                        <button onClick={() => console.log('connect')}>
                            Let's connect 
                            
                            <ArrowRightCircle size={25} />
                            
                        </button>
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
