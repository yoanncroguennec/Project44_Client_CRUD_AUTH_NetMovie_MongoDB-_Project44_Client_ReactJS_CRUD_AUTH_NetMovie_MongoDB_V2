import React, { useState } from "react";
import Header from "./layouts/Header";
import Container from "./layouts/Container";

export default function Paint() {
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
      <Header handleUstensil={handleUstensil} />
      <Container ustensil={ustensil} />
    </div>
  );
}
