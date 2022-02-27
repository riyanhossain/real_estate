import { textAlign } from "@mui/system";
import React from "react";
import "./HS5.css";

function HS5() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "674px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3 className="line2"></h3>
        <h1 style={{color:'white',fontWeight:'bold'}}>You’re in good hands</h1>
        <p style={{ textAlign: "center",fontSize:'20px',color:'white' }}>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <button className="newBtn">Learn more</button>
      </div>
    </div>
  );
}

export default HS5;
