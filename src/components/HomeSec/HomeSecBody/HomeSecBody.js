import React from "react";
import { Col, Row } from "react-bootstrap";

function HomeSecBody() {
  return (
    <div>
      <Row>
        <Col xxl={5}>
          <h1 style={{ marginTop: "20%", fontSize: "80px",color:'white' }}>
            Beautiful homes made for you
          </h1>
          <p style={{ fontSize: "20px",color:'white',opacity:'0.5'}}>
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default HomeSecBody;