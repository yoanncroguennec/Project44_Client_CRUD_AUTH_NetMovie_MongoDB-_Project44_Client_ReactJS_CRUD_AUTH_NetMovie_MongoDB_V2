import { Tooltip } from '@mui/material';
import React from 'react'

export default function ColorCard({ color, handleUstensil }) {
  return (
    <Tooltip title={color}>
      <div
        key={color}
        onClick={() => handleUstensil(color, "color")}
        style={{
          background: `${color}`,
          border: "4px solid #000",
          borderRadius: "50%",
          float: "left",
          height: "30px",
          margin: "20px",
          position: "relative",
          width: "30px",
        }}
      ></div>
    </Tooltip>
  );
}
