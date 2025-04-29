import React from "react";
import { Card } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";

function ExperienceCard({ title, company, duration, location, type, responsibilities }) {
  return (
    <div className="timeline-item">
      <Card className="experience-card">
        <Card.Body>
          <div className="experience-badge" style={{ textAlign: 'left', display: 'block' }}>{type}</div>
          <Card.Title className="experience-title">{title}</Card.Title>
          <Card.Subtitle className="experience-company">{company}</Card.Subtitle>
          
          <div className="experience-details">
            <div className="experience-duration">
              <BsCalendarDate /> {duration}
            </div>
            <div className="experience-location">
              <IoLocationSharp /> {location}
            </div>
          </div>

          <div className="experience-responsibilities">
            <ul>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard; 