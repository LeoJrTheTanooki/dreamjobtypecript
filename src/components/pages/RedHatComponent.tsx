import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import redHatLogo from "../../assets/red-hat.jpeg";

const RedHatComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Red Hat</h1>
            <img src={redHatLogo} style={{ float: "right", width: "10rem" }} />
            <h3>Who is Red Hat?</h3>
            <p>
              Red Hat is a company dedicated to providing open source software
              to developers and companies big and small alike, primarily
              focusing on hybrid-cloud services and deployment software.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Why Red Hat?</h3>
            <p>
              Red Hat is one of the few companies to develop software with FOSS
              (Free and Open Source) in mind. FOSS is something that I've
              personally been interested in as it allows other developers to see
              the inner workings of the given software, and even work off the
              given code to make extensions or something new entirely. They also
              allow the option to either work in-person or remotely, making
              accomodations depending on the employee.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Judgement</h3>
            <h4>Pros</h4>
            <ul>
              <li>Develops open source software</li>
              <li>Offers In-Person and Remote Job Opportunities</li>
              <li>Various locations around the world</li>
              <li>Great Place To Work 2022-23 Certified</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>Higher leadership isn't the best</li>
              <li>Fast paced environment</li>
            </ul>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://www.redhat.com/en/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Red Hat Jobs | Opportunities are Open
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/redhat/comments/oyxc64/life_at_red_hat/"
                  target="_blank"
                  rel="noreferrer"
                >
                  r/redhat - Life at Red Hat?
                </a>
              </li>
              <li>
              <a
              href="https://www.glassdoor.com/Overview/Working-at-Red-Hat-EI_IE8868.11,18.htm"
              target="_blank"
              rel="noreferrer"
            >
              Red Hat on Glassdoor
            </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RedHatComponent;
