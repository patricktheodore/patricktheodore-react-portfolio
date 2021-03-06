import '../styles/About.css'
import React from 'react';
import Avatar from '../assets/img/Avatar.png';
import Greeting from '../containers/About/AboutGreeting';
import Skills from '../containers/About/AboutToolbelt'
import { Container, Row, Col } from 'react-bootstrap';
import AboutFeatured from '../containers/About/AboutFeatured';
import featured from '../utils/featured';

export default function About() {
  return (
      <Container fluid className="about-cont">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-10">
                <h1 className="text-center" id="welcome-banner">Designer, Front-end Specialist &#38; Full-stack Developer</h1>
                <h5 className="text-center is-roboto" id="welcome-banner-subtext">I design and code beautifully simple things with a heavy focus on UI/UX. </h5>
            </Col>
            <Col className="col-12 text-center avatar-img">
                <img src={Avatar} id="avatar" alt="my avatar"></img>
            </Col>
          </Row>
        </Container>
        <Greeting /> 
        <Skills />
        <AboutFeatured featured={featured}/>
      </Container>
  );
}