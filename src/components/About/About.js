// src/components/About/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import TestimonialCard from "./TestimonialCard"; // Import TestimonialCard

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Existing About Section */}
        <Row style={{ justifyContent: "center", padding: "5px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Existing Professional Skillset Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
