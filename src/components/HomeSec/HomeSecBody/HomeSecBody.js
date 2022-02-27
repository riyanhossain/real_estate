import React from "react";
import { Col, Row } from "react-bootstrap";
import NavB from "../../NavB/NavB";

function HomeSecBody() {
  return (
    <div >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5%",
            width: "75%",
          }}
        >

          <Col xxl={5}>
            <h1 style={{ marginTop: "0%", fontSize: "80px", color: "white" }}>
              Beautiful homes made for you
            </h1>
            <p style={{ fontSize: "20px", color: "white", opacity: "0.5" }}>
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </Col>
          <Col></Col>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "80px",
            backgroundColor: "white",
            marginTop: "15%",
            width: "75%",
          }}
          className="bottomDV"
        >
          <h5 style={{ marginLeft: "8%" }}>See all Listing</h5>
        </div>
      </div>
      <div
        style={{ height: "100px", backgroundColor: "white", width: "100%" }}
      ></div>
    </div>
  );
}

export default HomeSecBody;
