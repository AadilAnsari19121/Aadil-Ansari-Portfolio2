import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgDebug } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaGithub, FaProjectDiagram } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpo,
  SiNativescript,
  SiCreatereactapp,
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiSqlite,
  SiAndroid,
} from "react-icons/si";
import { TbApi, TbBrandGolang, TbBrandReactNative, TbJson, TbPaint, TbUxCircle } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import ParticlesBackground from "../ParticlesBackground";


function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ParticlesBackground />
      <Col xs={4} md={2} className="tech-icons" style={{ alignItems: "center" }}>
        <TbBrandReactNative />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>React Native Cli</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Expo</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNativescript />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Native Modules</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCreatereactapp />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Navigation</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>React Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Html</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPaint />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Frontend</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>SqlLite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>API</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbUxCircle />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Ui/Ux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGooglePlaystore />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Play Store</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Oops</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbJson />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Json</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgDebug />
        <p style={{ textAlign: "center", fontSize: '1.5rem' }}>Debugging</p>
      </Col>
    </Row>

  );
}

export default Techstack;
