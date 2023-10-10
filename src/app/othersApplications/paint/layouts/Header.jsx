import Tools from "../Tools";
import Brush from "../Brush";
import ColorContainer from "./ColorContainer";
import React, { useState } from "react";

export default function Header({ handleUstensil }) {
    const [ustensil, setUstensil] = useState({
      tool: "",
      weight: "normal",
      color: "black",
    });

    function handleUstensil(updateItem, type) {
      const newUtensil = { ...ustensil };
      if (updateItem === "eraser") {
        newUtensil["color"] = "white";
        newUtensil["tool"] = "brush";
        setUstensil(newUtensil);
      } else {
        newUtensil[type] = updateItem.toLowerCase();
        setUstensil(newUtensil);
      }
      console.log(newUtensil);
    }


  return (
    <div>
      <Tools handleUstensil={handleUstensil} />
      <Brush handleUstensil={handleUstensil} />
      <ColorContainer handleUstensil={handleUstensil} />
    </div>
  );
}

// Set up useState to store color / brush-type / brush - weight

// tool = {
//   weight: thin,
//   type: Brush,
//   color: red,
// }
