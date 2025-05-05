import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import cleavapp from "../../Assets/Projects/cleaveap_attendance_app.png";
import opticalCrm from "../../Assets/Projects/optical_crm_app.png";
import callSync from "../../Assets/Projects/call_logs_sync_app.png";
import baliRatnIsland from "../../Assets/Projects/bali_ratn_island_prj.png";
import un_conveertor_prj from "../../Assets/Projects/un_conveertor_prj.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleavapp}
              isBlog={false}
              title="CLEAVEAP Attendance App"
              description="Developed a GPS-based attendance tracking app with map integration and predefined work zones for accurate check-in/out, incorporating selfie-based face verification, real-time logs with travel history, correction requests, and status display. The app also features Expo Notifications for timely check-in/out reminders and a clean, responsive design suitable for both on-site and field employees."
              ghLink="https://www.dnb-ma.com/"
              skills={["React Native", "Expo", "Expo Notifications", "Google Maps API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opticalCrm}
              isBlog={false}
              title="Optical CRM"
              description="Developed a comprehensive employee management and attendance tracking system for an optical business using React Native, featuring face recognition with live photo capture. The mobile app centralized customer details, order tracking, employee tasks, and attendance, backed by Firebase services for authentication, database, and image storage. This mobile-first CRM design streamlined workflows and enhanced operational efficiency."
              ghLink="https://www.dnb-ma.com/"
              skills={["React Native", "Google Map Api", "Face Recognition", "Expo", "MySql"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={callSync}
              isBlog={false}
              title="Call Logs Sync App"
              description="Developed an internal-use app to automatically sync call logs of field employees for monitoring and reporting, capturing incoming, outgoing, and missed calls along with time, number, and duration. Leveraged native Android modules and permissions for secure access to call history, syncing data to MySQL with unique user IDs. The app featured a lightweight, battery-efficient background service to minimize resource usage."
              ghLink="https://www.dnb-ma.com/"
              skills={["React Native", "Java (Native Module)", "PhoneState Manager", "Android Permissions"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baliRatnIsland}
              isBlog={false}
              title="Bali Ratn Island"
              description="Developed a comprehensive restaurant management system for 5-star restaurants, streamlining operations from order placement to billing. Designed a user-friendly interface to enhance customer satisfaction and collaborated with the Aarksoft WebTech team during an internship, contributing to the project while building skills in teamwork, communication, and leadership."
              ghLink="https://github.com/AadilAnsari19121/Bali-Ratn-Island"
              skills={["Java", "Xml", "Android Studio", "Firebase"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={un_conveertor_prj}
              isBlog={false}
              title="UnConvertor"
              description="Built a practical daily utility app focused on essential unit conversions like length and volume, reflecting a strong understanding of user needs. Completed the project independently, demonstrating solid problem-solving and organizational skills, while applying Android development expertise to create a functional, efficient, and user-centric solution."
              ghLink="https://github.com/AadilAnsari19121/UnConvertor"
              skills={["Java", "Xml", "Android Studio"]}

            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
