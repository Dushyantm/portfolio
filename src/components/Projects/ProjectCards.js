// ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {Array.isArray(props.description) ? (
          <ul style={{ textAlign: "left" }}>
            {props.description.map((point, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}
        {/* GitHub Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Paper Link"}
          </Button>
        )}
        {/* Blog Button */}
        {props.blogLink && (
          <Button variant="primary" href={props.blogLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Blog"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
