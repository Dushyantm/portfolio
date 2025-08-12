import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Dushyant Mahajan </span>
            from <span className="purple"> Boston, MA.</span>
            <br />
            <br />
            A passionate Computer Engineer 🚀 with experience collaborating closely with software engineers and fellow data scientists to develop and deploy cutting-edge AI techniques.
            <br />
            <br />
            I bring a strong foundation in Gen AI with hands-on experience in building LLM applications, fine tuning LLMs, building RAG pipelines at scale and evaluating LLM models.
            <br />
            <br />
            My passion for continuous growth fuels my motivation to embrace new challenges and innovative ideas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If it's too easy, then you're not doing it right!"{" "}
          </p>
          <footer className="blockquote-footer">Casey Neistat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
