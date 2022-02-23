import React from "react";
import { Container } from "react-bootstrap";
import NavB from "../NavB/NavB";
import "./HomeSec.css";
import HomeSecBody from "./HomeSecBody/HomeSecBody";

function HomeSec() {
  return (
    <div className="HomeSec">
      <Container>
        <NavB />
        <HomeSecBody/>
      </Container>
    </div>
  );
}

export default HomeSec;
