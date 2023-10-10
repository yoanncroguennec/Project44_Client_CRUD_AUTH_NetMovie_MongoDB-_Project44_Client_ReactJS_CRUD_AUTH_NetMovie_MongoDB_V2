import React from "react";
import Items from "./Items";
// import Colors from "./Colors";
import { Button } from "@mui/material";

export default function Tools({ handleUstensil }) {
  return (
    <div>
      {/* <Items handleUstensil={handleUstensil} /> */}
      <Button
        name='brush'
        onClick={(e) => handleUstensil(e.target.name, "tool")}
        variant='outlined'
      >
        🖊️
      </Button>
      <Button
        name='bucket'
        onClick={(e) => handleUstensil(e.target.name, "tool")}
        variant='outlined'
      >
        🥣
      </Button>
      <Button
        name='eraser'
        onClick={(e) => handleUstensil(e.target.name, "tool")}
        variant='outlined'
      >
        ❌
      </Button>
      {/* <Colors /> */}
    </div>
  );
}
