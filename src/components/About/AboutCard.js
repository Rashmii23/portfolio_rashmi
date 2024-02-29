import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rashmi Khadka </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />
            I am currently final year computer Engineering student at Ioe, Thapathali Campus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Involving in sports 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep Going On"{" "}
          </p>
          <footer className="blockquote-footer">Rashmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
