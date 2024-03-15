import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import humbleLogo from "../../assets/Humble-Bundle-Teaser-Allgemein.jpg";

const HumbleComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Humble Bundle Inc.</h1>
            <img src={humbleLogo} style={{ float: "right", width: "10rem" }} />
            <h3>Who is Humble Bundle Inc.?</h3>
            <p>
              Humble Bundle Inc. is a company that's best known for their
              charity bundles and DRM-free games. They started in 2010 as a way
              to sell some indie games, and grew from since then into an award
              winning company that prides itself in fostering a community.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Why Humble Bundle Inc.?</h3>
            <p>
              Humble Bundle, by its name, focuses on selling bundles of games,
              these games are DRM-Free, directly support the developers, and are
              frequently bundled for charity events. Recently they've also been
              interested in publishing games, one of which is a game that I've
              been following its development for a while at this point. Their
              contributions and focus on community, as well as their focus on
              making games more accessible by not using DRM is what made me set
              my sights on them as a potential employer.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Judgement</h3>
            <h4>Pros</h4>
            <ul>
              <li>Remote positions available</li>
              <li>Great employees on mid to lower levels</li>
              <li>Free games every month</li>
              <li>Great benefits</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>Lack of communication on Senior Leadership's part</li>
              <li>Owned by parent company who calls the shots</li>
              <li>Not as great as it used to be (This one hurts)</li>
            </ul>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://www.jobs.humblebundle.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Humble Bundle Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Reviews/Humble-Bundle-Reviews-E751317.htm?sort.sortType=RD&sort.ascending=false&filter.iso3Language=eng"
                  target="_blank"
                  rel="noreferrer"
                >
                  Huble Bundle on Glassdoor
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HumbleComponent;
