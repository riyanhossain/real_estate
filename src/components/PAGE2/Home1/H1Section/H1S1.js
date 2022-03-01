import React from "react";
import NavB from "../../../NavB/NavB";


function H1S1(props) {
  const h1=props.h1
  return (
    <div
      style={{
        // height: "228px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "75%" }}>
        <NavB />
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

      <div style={{ width: "75%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>
            <strong style={{ color: "white" }}>{h1.title}</strong>
          </h5>
          <h5>
            <strong style={{ color: "white" }}>{h1.price}</strong>
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "white", opacity: "0.5" }}>{h1.address}</p>
          <p style={{ color: "white", opacity: "0.5" }}>{h1.space}</p>
        </div>
      </div>
    </div>
  );
}

export default H1S1;
