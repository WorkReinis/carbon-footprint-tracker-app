import React from "react";
import "./custom-tooltip-01.css";

function CustomTooltip01({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null; 
};

export default CustomTooltip01;
