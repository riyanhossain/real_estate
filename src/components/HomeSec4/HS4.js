import React from "react";
import { Col, Row } from "react-bootstrap";
import content from "../../Images/content1.png";
import '../HomeSec2/HomeSec2.css'

function HS4() {
  return (
    <div style={{marginTop:'10%'}}>
      <Row>
      <Col
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: "8%"
          }}
        >
          <section style={{marginLeft: '15%'}}>
            <h3 className="line"></h3>
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
        <Col
          style={{
            background: "linear-gradient(to top, white 0%,#f5f5f5 100%)",
          }}
        >
          <img src={content} alt="" className="imgHome2" />
        </Col>

      </Row>
    </div>
  );
}

export default HS4;
