import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadil Ansari </span>
            from <span className="purple"> Vadodara, Gujarat.</span>
            <br />
            I am currently employed as a React Native developer at Dnb mulitapps llp.
            <br />
            I have completed Bca at Parul University,
            Vadodara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Time Spending with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aadil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
