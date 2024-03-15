import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import valveLogo from "../../assets/Valve-Logo-1996.png";

const ValveComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Valve</h1>
            <img src={valveLogo} style={{ float: "right", width: "10rem" }} />
            <h3>Who is Valve?</h3>
            <p>
              Valve is one of gaming's biggest giants, particularly when it
              comes to PC games. Founded in 1996 and releasing its first game,
              Half Life in 1998, Valve has dedicated itself in finding new ways
              for PC gamers to play games in a new way, with varying success.
              It's most recent success was the Steam Deck, a portable PC
              designed like a console.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Why Valve?</h3>
            <p>
              Valve is a very well known entity in the gaming industry,
              publishing games for all sorts of developers, including games from
              Microsoft and Sony themselves recently. Valve has also shown
              commitment with community feedback, shown with how they've turned
              Steam Deck mods like custom opening movies into full on
              implemented featues. Valve has made playing various games, even
              outside my own library, especially easier whether through its
              Steam Controller Tools or Proton integration, there's plenty of
              reason to trust Valve, especially compared to most other
              companies.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Judgement</h3>
            <h4>Pros</h4>
            <ul>
              <li>Freedom to work on any project you desire</li>
              <li>Networked with various developers</li>
              <li>Free vacations with family</li>
              <li>Not even the CEO can call the shots so easily</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>
                Will mostly be prioritzing what others are working on, no time
                to work on Half Life 3
              </li>
              <li>Diversity issues</li>
              <li>No formal higher-ups, too much freedom</li>
              <li>Most employees are seniors</li>
            </ul>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://www.valvesoftware.com/en/publications"
                  target="_blank"
                  rel="noreferrer"
                >
                  Valve Handbook
                </a>
              </li>
              <li>
                <a
                  href="https://www.valvesoftware.com/en/publications"
                  target="_blank"
                  rel="noreferrer"
                >
                  People Make Games - What's It Really like Working at Valve? We
                  Found Out.
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=s9aCwCKgkLo"
                  target="_blank"
                  rel="noreferrer"
                >
                  People Make Games - What's It Really like Working at Valve? We
                  Found Out.
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=41XgkLKYuico"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tyler McVicker - What it's Like to Work at Valve.
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Overview/Working-at-Valve-Corporation-EI_IE24849.11,28.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Valve on Glassdoor
                </a>
              </li>
            </ul>

            {/* https://cdn.cloudflare.steamstatic.com/apps/valve/Valve_NewEmployeeHandbook.pdf */}
            {/* What's It Really like Working at Valve? We Found Out. https://www.youtube.com/watch?v=s9aCwCKgkLo&t=900s */}
            {/* What it's Like to Work at Valve https://www.youtube.com/watch?v=41XgkLKYuic */}
            {/* target="_blank" rel="noreferrer" */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ValveComponent;
