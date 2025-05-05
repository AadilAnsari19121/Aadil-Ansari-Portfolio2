import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";

function ExperienceCard(props) {
    return (
        <Card className="ex-card-view">
            <Card.Body>
                {/* Title and Company Info */}
                <div className="mb-2">
                    <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
                    <div style={{ fontSize: "0.95rem", color: "#adadad" }}>
                        {props.company} &nbsp; | &nbsp; <span>{props.duration}</span>
                    </div>
                </div>

                {/* Experience List */}
                <ul style={{ textAlign: "start", paddingLeft: "1rem" }}>
                    {props.experience.map((item, index) => (
                        <li key={index} style={{ marginBottom: "6px" }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>

    );
}
export default ExperienceCard;
