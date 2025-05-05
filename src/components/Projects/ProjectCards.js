import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.skills && props.skills.length > 0 && (
          <div
            className="mt-3 p-2"
            style={{
              border: "1px solid #77358875",
              borderRadius: "8px"
            }}
          >
            {props.skills.map((skill, index) => (
              <span
                key={index}
                className="badge me-2 mb-1"
                style={{ fontSize: "0.95rem" }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
