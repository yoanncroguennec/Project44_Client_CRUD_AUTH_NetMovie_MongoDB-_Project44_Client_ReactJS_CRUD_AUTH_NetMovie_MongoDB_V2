import React, { useState } from 'react'

export default function Container({ ustensil }) {
  const { tool, wegiht, color } = ustensil;
  const [draw, setDraw] = useState(false)

  const [magic, setMagic] = useState({
    background: "white",
    border: "5px solid rgb(207, 207, 207)",
    borderStyle: "groove",
    height: "80vh",
    width: "60vw",
  })

  function handleBucket(e) {
      if ( tool === "bucket") {
        const newItem = {
          ...magic,
          background: color
        }
        setMagic(newItem)}
    }

      function handleMouseDown(e) {
        if (tool === "brush" && draw === true) {
          console.log(e.screenX);
        }
      }

  return (
    <div
      style={magic}
      onClick={handleBucket}
      onMouseDown={(e) => setDraw(true)}
      onMouseMove={(e) => handleMouseDown(e)}
      onMouseUp={() => setDraw(false)}
    >
    </div>
  );
}
