import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";

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
          <h3 className="h3Line">Make your dreams a <span className="reality">reality</span></h3>
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
          width: "70vw",
          flexWrap: "nowrap",
          marginTop: "5%",
          justifyContent: "space-between",
        }}
      >
        <h3 >Make your dreams a</h3>
        <button className="footBtn">Work with us</button>
      </div>
    </div>
  );
}

export default Footer;
