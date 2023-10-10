import React, { useRef, useState } from "react";
import { Typography, Container, styled, Box } from "@mui/material";
// NEXT
// COMPONENTS COMMONS
import Thumbnail from "./Thumbnail";
// ICONS
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

//////////////////// STYLES ////////////////////
const BoxRow = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  textDecoration: "none",
};

const TypoTitleCategory = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  marginLeft: "50px",
}));

const styleBiChevronLeft = {};

const BoxListMovies = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginLeft: "2px",
  overflow: "hidden",
  height: "100%",
}));

const styleBiChevronRight = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "100%",
  margin: "auto",
  position: "absolute",
  right: 0,
  top: 0,
  width: "50px",
  zIndex: 150,
};

//////////////////// EXPORT FUNCTION ////////////////////
export default function Row({ list }) {
  const { title, content } = list;
  const [hiddenChevronLeft, sethiddenChevronLeft] = useState(false);

  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      console.log("scrollLeft", scrollLeft);
      console.log("clientWidth", clientWidth);

      const scrollTo =
        direction === "left"
          ? (scrollLeft - clientWidth)
          : (sethiddenChevronLeft(true), scrollLeft + clientWidth);

      // "smooth": Il y a un comportement de défilement lisse entre les éléments.
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <Container maxWidth='xl' sx={{ marginBottom: "60px" }}>
      <BoxRow>
        <Link to='' style={styleLink}>
          <TypoTitleCategory variant='h5'>
            {title} : {content.length} films dans le slide
          </TypoTitleCategory>
        </Link>
        <div style={{ position: "relative" }}>
          <BiChevronLeft
            size={22}
            // style={styleBiChevronLeft}
            onClick={() => handleClick("left")}
            style={{
              bottom: 0,
              backgroundColor: "rgb(22, 22, 22, 0.5)",
              color: "white",
              cursor: "pointer",
              height: "100%",
              left: 0,
              margin: "auto",
              position: "absolute",
              top: 0,
              width: "50px",
              zIndex: 150,
              display: !hiddenChevronLeft && "none",
            }}
          />
          <BoxListMovies ref={rowRef}>
            {content?.map((item) => (
              <Thumbnail item={item} />
            ))}
          </BoxListMovies>
          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick("right")}
          />
        </div>
      </BoxRow>
    </Container>
  );
}
