import React from "react";
import { Button } from "@mui/material"

export default function Items({ handleUstensil }) {
  return (
    <div>
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
    </div>
  );
}
