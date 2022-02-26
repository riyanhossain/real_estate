import React from "react";
import DropSelect from "./DropSelect";

function HS21() {
  return (
    <div>
      <h1>Find your next place to live</h1>
      <div style={{display:'flex',justifyContent: 'space-between',marginTop:'5%'}}>
        <DropSelect />
        <DropSelect />
        <DropSelect />
        <DropSelect />
      </div>
    </div>
  );
}

export default HS21;
