import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ExperienceCard from './ExperienceCard';

import ParticlesBackground from "../ParticlesBackground";

const Experience = () => {
    return (
        <Container fluid className="project-section">
            <ParticlesBackground />
            <Container>
                <h1 className="project-heading">
                    My latest <strong className="purple">Work Experience </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Professional Experience & Roles.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={12} className="d-flex flex-column align-items-center gap-4">
                        <div style={{ width: "70%" }}>
                            <ExperienceCard
                                title="React Native Developer"
                                company="DNB Multiapp LLP, Vadodara, Gujarat"
                                duration="October 2024 - Present"
                                experience={[
                                    "Cross-Platform Development: Built and maintained Android applications using React Native and Expo with scalable architecture.",
                                    "State Management: Used Redux and Context API for smooth data flow and component-level control.",
                                    "API Integration: Integrated REST APIs and Firebase services (Firestore, Auth, Storage) for real-time updates.",
                                    "Performance Optimization: Improved load time, reduced lag, and enhanced animations using debugging tools and profiling.",
                                    "Push Notifications: Configured Firebase Cloud Messaging (FCM) and Expo Notifications for event-based alerts.",
                                    "UI/UX Enhancement: Designed responsive and modern interfaces using React Navigation, custom styling, and consistent UI patterns.",
                                    "Deployment: Worked with designers and backend teams to deploy apps to the internal testers.",
                                    "Key Projects: Optical CRM (face-recognition attendance system), Call Log Tracker (logs sales call data), Standalone Face Attendance App (Face++ API tracker), Call Recorder (R&D using native Android module)."
                                ]}
                            />
                        </div>

                        <div style={{ width: "70%" }}>
                            <ExperienceCard
                                title="Web Frontend & React Native Intern"
                                company="Aarksoft WebTech, Vadodara, Gujarat"
                                duration="May 2024 – September 2024"
                                experience={[
                                    "Dual Role: Completed a 5-month internship focused on both Web Frontend and React Native App Development.",
                                    "Web Frontend Development: Gained hands-on experience with HTML5, CSS3, JavaScript, and Bootstrap while building responsive UIs.",
                                    "React Native Foundations: Learned core concepts like component architecture, navigation, and state management.",
                                    "Project Exposure: Worked on real-time mini projects and contributed to both web and mobile codebases under mentor guidance.",
                                    "Version Control: Used Git and GitHub for collaborative development and code management.",
                                    "Professional Growth: Developed strong understanding of UI/UX principles and cross-platform development practices."
                                ]}
                            />
                        </div>

                        <div style={{ width: "70%" }}>
                            <ExperienceCard
                                title="Store Incharge"
                                company="Anstech Resources Pvt. Ltd."
                                duration="January 2023 - February 2024"
                                experience={[
                                    "Inventory Management Expertise: Proven ability to manage inventory levels, optimize stockroom operations, and minimize waste.",
                                    "Logistics Coordination: Skilled in coordinating logistics, ensuring timely delivery of materials, and maintaining efficient supply chain operations.",
                                    "Staff Supervision: Experienced in supervising staff, providing guidance, and ensuring high levels of productivity and performance.",
                                    "Operational Efficiency: Consistently ensured efficient operations, reducing costs, and improving overall productivity.",
                                    "Safety and Compliance: Strong commitment to upholding safety standards, ensuring compliance with regulations, and maintaining a safe working environment.",
                                    "Team Leadership: Demonstrated ability to lead teams, motivate staff, and achieve shared goals.",
                                    "Attention to Detail: Strong attention to detail, ensuring accuracy, and maintaining high standards in all aspects of work."
                                ]}

                            />
                        </div>

                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default Experience
