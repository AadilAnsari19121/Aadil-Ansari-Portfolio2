import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Aadil_Ansari_Resume.png";
import pdfDownload from "../../Assets/../Assets/Aadil_Ansari_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={pdfDownload}
            download
            style={{
              maxWidth: "250px",
              textDecoration: "none",
            }}
          >
            <Button variant="primary" style={{ width: "100%" }}>
              <AiOutlineDownload size={'20'} />
              &nbsp;&nbsp;Download CV
            </Button>
          </a>
        </Row>


        <Row className="resume">
          <div className="d-flex justify-content-center">
            <img
              src={pdf}
              alt="home pic"
              className="img-fluid"
              style={{
                maxHeight: "1000px", // bigger height
                width: "auto",
                border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                marginTop: "-20px",
              }}
            />
          </div>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
