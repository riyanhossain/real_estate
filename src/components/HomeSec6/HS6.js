import React from "react";
import { Col } from "react-bootstrap";
import person from "../../Images/person1.png";
import './HS6.css'

function HS6() {
  return (
    <div
      style={{
        height: "674px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "431px",
          width: "1069px",
          display: "flex",
        }}
      >
        <Col style={{ backgroundColor: "white" }}>
          <div style={{ height: "290px" }}>
            <h1 className="line4"></h1>

            <h5 style={{marginTop:'30px',textAlign:'center'}}>
              <strong>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                excepturi quibusdam architecto obcaecati laboriosam, autem
                maiores suscipit eligendi accusantium necessitatibus."
              </strong>
            </h5>
          </div>
          <div
            style={{
              height: "141px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:'#ffac12'
            }}
          >
            <div>
              <img src={person} alt="" />
            </div>
              <p style={{marginLeft:'10px'}}>
                <strong>Lara Madrigal</strong><br/>
                Client
              </p>
          </div>
        </Col>
        <Col style={{ backgroundColor: "white" }}>
          <div style={{ height: "290px" }}>
            <h1 className="line3"></h1>

            <h5 style={{marginTop:'30px',textAlign:'center'}}>
              <strong>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                excepturi quibusdam architecto obcaecati laboriosam, autem
                maiores suscipit eligendi accusantium necessitatibus."
              </strong>
            </h5>
          </div>
          <div
            style={{
              height: "141px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:'black'
            }}
          >
            <div>
              <img src={person} alt="" />
            </div>
              <p style={{marginLeft:'10px',color:'white'}}>
                <strong>Lara Madrigal</strong><br/>
                Client
              </p>
          </div>
        </Col>
        <Col style={{ backgroundColor: "white" }}>
          <div style={{ height: "290px" }}>
            <h1 className="line4"></h1>

            <h5 style={{marginTop:'30px',textAlign:'center'}}>
              <strong>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                excepturi quibusdam architecto obcaecati laboriosam, autem
                maiores suscipit eligendi accusantium necessitatibus."
              </strong>
            </h5>
          </div>
          <div
            style={{
              height: "141px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:'#ffac12'
            }}
          >
            <div>
              <img src={person} alt="" />
            </div>
              <p style={{marginLeft:'10px'}}>
                <strong>Lara Madrigal</strong><br/>
                Client
              </p>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default HS6;
