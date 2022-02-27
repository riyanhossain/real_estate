import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../Images/logo2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            flexWrap: "nowrap",
            marginTop: "5%",
            justifyContent: "space-between",
          }}
        >
          <h3 className="h3Line">
            Make your dreams a <span className="reality">reality</span>
          </h3>
          <button className="footBtn">Work with us</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 className="footLine"></h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            flexWrap: "nowrap",
            marginTop: "5%",
            justifyContent: "space-between",
          }}
        >
          <Col xs={5}>
            <img src={logo} alt="" style={{ marginLeft: "0%" }} />
            <div>
              <FacebookIcon color={"warning"} />
              <InstagramIcon color={"warning"} />
              <TwitterIcon color={"warning"} />
            </div>
          </Col>
          <Col xs={7} style={{ display: "flex" }}>
            <Col>
              <h6>
                <a href="#" className="link">Column heading</a>
              </h6>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
            </Col>
            <Col>
              <h6>
                <a href="#" className="link">Column heading</a>
              </h6>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
            </Col>
            <Col>
              <h6>
                <a href="#" className="link">Column heading</a>
              </h6>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
              <p><a href="#" className="link">Link</a></p>
            </Col>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default Footer;
