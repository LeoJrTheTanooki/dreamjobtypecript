import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gitLabLogo from "../../assets/gitlab.png";

const GitLabComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>GitLab</h1>
            <img src={gitLabLogo} style={{ float: "right", width: "10rem" }} />
            <h3>Who is GitLab?</h3>
            <p>
              GitLab is one of the world's largest remote companies that
              develops services used by millions of users across the world.
              Founded in 2011, GitLab's primary service is its DevOps platform
              designed to make it easier for developers to work on projects in a
              variety of ways from planning to monitoring, with a focus on
              security. A lot of their stuff is free and open source, however
              they do offer premium features for $19 a month, which while
              proprietary, does offer some perks compared to the free version.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Why GitLab?</h3>
            <p>
              GitLab specializes and prides itself as being an all-in-one hub
              for all sorts of developers big and small, focused on creating a
              secure platform to keep track of you or your teams' git projects.
              They're trusted by many big names too like T-Mobile, Nvidia, and
              Carfax to name a few. I had only recently learned about GitLab
              from a friend, but from what I'm seeing they appear to be a great
              company to work for, especially if you wish to work remotely for
              one reason or another.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Judgement</h3>
            <h4>Pros</h4>
            <ul>
              <li>Great Place To Work 2023-24 Certified</li>
              <li>
                Open-core business model (Software free, proprietary add-ons
                priced)
              </li>
              <li>Remote work opportunities around the world</li>
              <li>Great team to work with</li>
              <li>Offers great benefits</li>
              <li>Values remain strong</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>Management isn't so great, plenty of micro-management</li>
              <li>Influx of hirees leads to mixed values</li>
              <li>Still considered a startup</li>
              <li>Difficult to sell premium</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://handbook.gitlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Gitlab Handbook
                </a>
                <ul>
                  <li>
                    <a
                      href="https://handbook.gitlab.com/handbook/people-group/employment-branding/content-library/#awards-and-lists-recognizing-gitlab-as-a-great-place-to-work"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Awards
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Overview/Working-at-GitLab-EI_IE1296544.11,17.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitLab on Glass Door
                </a>
              </li>
              <li>
                <a
                  href="https://www.simplilearn.com/tutorials/git-tutorial/what-is-gitlab"
                  target="_blank"
                  rel="noreferrer"
                >
                  Simplilearn - What is GitLab?
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GitLabComponent;
