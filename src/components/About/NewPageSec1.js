import React from 'react'
import NavB from '../NavB/NavB'

function NewPageSec1(props) {
    const house=props.house
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
          <strong style={{ color: "white" }}>{house[0].title}</strong>
        </h5>
        <h5>
          <strong style={{ color: "white" }}>{house[0].price}</strong>
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "white", opacity: "0.5" }}>{house[0].address}</p>
        <p style={{ color: "white", opacity: "0.5" }}>{house[0].space}</p>
      </div>
    </div>
  </div>
  )
}

export default NewPageSec1