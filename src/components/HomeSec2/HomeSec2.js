import React from "react";
import { Col, Row } from "react-bootstrap";
import home2 from "../../Images/content1.png";
import "./HomeSec2.css";
import HS21 from "./HS21/HS21";

function HomeSec2() {
  return (
    <div>
      <Row>
        <Col>
          <img src={home2} alt="" srcset="" className="imgHome2" />
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <section>
            <h3></h3>
            <h1>You’re in good hands</h1>
            <p style={{ width: "50%" }}>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
              texit, ne ferae quidem se repellere, idque instituit docere sic:
              omne animal, simul atque integre iudicante itaque aiunt hanc quasi
              involuta aperiri, altera occulta quaedam et voluptatem accusantium
              doloremque.
            </p>
            <button className="homeBtn">Learn more</button>
          </section>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section style={{ width: "60vw" }}>
          <HS21 />
        </section>
      </div>
    </div>
  );
}

export default HomeSec2;
