import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Aadil Ansari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2025 AA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AadilAnsari19121"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/918758883845"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aadil-ansari-qadri/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:ansariaadil786092@gmail.com?subject=Hello%20Adil!&body=I%20saw%20your%20portfolio%20and%20I%20would%20love%20to%20connect!"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
