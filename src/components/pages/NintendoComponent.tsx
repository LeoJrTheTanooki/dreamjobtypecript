import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import nintendoLogo from "../../assets/nintendo-logo.webp";

const NintendoComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Nintendo</h1>
            <img
              src={nintendoLogo}
              style={{ float: "right", width: "10rem" }}
            />
            <h3>Who is Nintendo?</h3>
            <p>
              Nintendo is a big player in the games industry, a force to be
              reckoned with and revered for multiple reasons. Starting out as a
              playing card maker in 1889, Nintendo would go on to become one of
              the most well known names in and out of gaming circles as a whole.
              They've developed some of the most well known and beloved
              gamesthat continue to be played years later, one way or another.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Why Nintendo?</h3>
            <p>
              Nintendo is not only recognized by many for their innovative games
              that manage to capture anyone of any age group, but they're also
              one of the three top console distributors, keeping that title in
              spite of everything they've been through. They're one of the few
              companies to still be doing very well financially when every other
              console manufacturer succumbed to one fate or another, staying
              afloat when the odds were against them time after time. Working at
              Nintendo has also been my dream job since I was a kid.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Judgement</h3>
            <h4>Pros</h4>
            <ul>
              <li>
                Refused to lay off employees in spite of trends, increased their
                salaries instead
              </li>
              <li>Decent pay</li>
              <li>Developer of creative titles</li>
              <li>
                Benefits range from health coverage, to parental leave, to
                retirement planning, among many others
              </li>
              <li>Fufills a childhood dream</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>
                Competition for positions is rough; difficult to get in, easy to
                get out
              </li>
              <li>Little opportunity for advancement</li>
              <li>Upper management is very closed minded</li>
              <li>Nintendo of Japan calls all the shots</li>
            </ul>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://careers.nintendo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nintendo Careers Website
                </a>
                <ul>
                  <li>
                    <a
                      href="https://careers.nintendo.com/benefits-and-perks/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Benefits
                    </a>
                  </li>
                </ul>
              </li>
              <li>
              <a
              href="https://www.glassdoor.com/Overview/Working-at-Nintendo-EI_IE3533.11,19.htm"
              target="_blank"
              rel="noreferrer"
            >
              Nintendo on Glassdoor
            </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NintendoComponent;
