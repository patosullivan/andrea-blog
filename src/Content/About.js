import andrea from "./andrea.jpg"
import React from "react"
import {Col, Row} from "reactstrap"

const About = () => (
  <Row>
    <Col>
      <img src={andrea} className="w-75 rounded float-right" />
    </Col>
    <Col sm>
      <br />
      <p>
        {"Andrea O'Sullivan"} is a feature writer for The Bridge at the Mercatus
        Center at George Mason University. Her work focuses on cybersecurity,
        surveillance, Internet freedom, cryptocurrency, and the economics of
        technology. Her writing has been published in the{" "}
        <em>
          Wall Street Journal, Chicago Tribune, Newsweek, Washington Times, US
          News and World Reports,
        </em>
        and other outlets, and she pens a regular column on technology topics
        for <em>Reason</em>. She was selected as one of Forbes’ 30 Under 30 in
        policy in 2016. She is a coauthor of{" "}
        <em>
          Liberalism and Cronyism: Two Rival Political and Economic Systems
        </em>{" "}
        with Randall G. Holcombe and <em>Bitcoin: A Primer for Policymakers</em>{" "}
        with Jerry Brito. {"O'Sullivan"} studied economics and political science
        at Florida State University on the undergraduate level and economics at
        George Mason University at the graduate level.
      </p>
    </Col>
  </Row>
)

export default About
