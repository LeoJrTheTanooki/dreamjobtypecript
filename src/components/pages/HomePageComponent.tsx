import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import redHatLogo from "../../assets/red-hat.jpeg";
import nintendoLogo from "../../assets/nintendo-logo.webp";
import valveLogo from "../../assets/Valve-Logo-1996.png";
import gitLabLogo from "../../assets/gitlab.png";
import humbleLogo from "../../assets/Humble-Bundle-Teaser-Allgemein.jpg";

const HomePageComponent = () => {
    const navigate = useNavigate();

    const handlePageChange = (path: string) => {
        navigate(path)
    }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Dream Jobs</h1>
            <p>Places that I think would be nice to work at</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={redHatLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Red Hat</Card.Title>
                <Card.Text>
                  Developer of open source software and services, primarily
                  hybrid cloud services.
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/redhat")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={nintendoLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Nintendo</Card.Title>
                <Card.Text>
                  Developer of highly regarded games since 1972, founded in 1889.
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/nintendo")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={valveLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Valve</Card.Title>
                <Card.Text>
                  Top distributor of digital PC games, well known in the industry.
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/valve")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gitLabLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>GitLab</Card.Title>
                <Card.Text>
                  Developer of services designed for Git.
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/gitlab")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100 mx-auto" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={humbleLogo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Humble Bundle Inc.</Card.Title>
                <Card.Text>
                  DRM free distributor and publisher of games.
                </Card.Text>
                <Button className="mt-auto" variant="primary" onClick={() => handlePageChange("/humble")}>Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageComponent;
