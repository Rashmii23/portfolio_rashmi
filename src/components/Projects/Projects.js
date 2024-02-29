import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import portfolio from "../../Assets/Projects/hello.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This is my personal portfolio. Do checkit out on github"
              ghLink="https://github.com/Rashmii23/portfolio_rashmi"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aspect Based Sentiment Annalysis"
              description="This is my major project based on aspect based sentiment analysis"
              ghLink="https://github.com/Rashmii23/ABSA"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Artificial Neural Network"
              description="This is my project on implementation of artificial neural network"
              ghLink="https://github.com/Rashmii23/ANN"
              demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
