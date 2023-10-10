import { Typography } from "@mui/material";
import ColorCard from "./ColorCard";

const colorList = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "black",
  "white",
  "brown",
  "purple",
  "Mustard",
  "grey",
  "orange",
  "salmon",
];



function ColorContainer({ handleUstensil }) {
  const colorGrid = colorList.map((color) => (
    <ColorCard color={color} key={color} handleUstensil={handleUstensil} />
  ));
  
  return <div id='colorGrid'>{colorGrid}</div>;
}

export default ColorContainer;

// Need a data full of colors
// Map through the array of colors
// Display each colors inside its own color card / box
// Declare a state for color chosen in the colors Container
