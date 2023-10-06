import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import {  Link, Outlet } from "react-router-dom";
import axios from "axios";
// COMMON UTILS
import {Navbar} from ".";

//////////////////// STYLES ////////////////////
const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  color: "white",
  display: "flex",
  flexWrap: "nowrap",
  height: " 100px",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "999",
  [theme.breakpoints.down("sm")]: {},
}));

const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  display: "flex",
  flexWrap: "nowrap",
  marginRight: "20px",
  marginLeft: "55px",
  textDecoration: "none",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
};

export default function AppLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {
  //////////////////////////// CURSOR
  // "useRef" : Permet de faire référence à un élément DOM, dont il va retourner un objet modifiable dont la propriété "current" est initialiser avec l'argument fourni
  let cursorRef = useRef();
  function mousePosition(e) {
    // Renvoit un objet nommé "cursorRef", possédant la "key" : "current", on rajoutte ".current"
    // console.log(cursorRef.current);
    // e get position cursor
    // Exemples d'attribut ("rel", "href", "src")
    cursorRef.current.setAttribute(
      "style",
      `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`
    );
  }
  function mouseClick() {
    cursorRef.current.classList.add("expand");

    setTimeout(() => {
      cursorRef.current.classList.remove("expand");
    }, 500);
  }

  const [darkMode, setDarkMode] = useState(false);

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        setAllMovies(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [allMovies]);

  return (
    <div ref={cursorRef}>
      <Navbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      />

      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          height: "97vh",
          width: "100vw",
          // marginTop: "70px",
        }}
      >
        <Outlet
          context={[
            allMovies,
            darkMode,
            id_Of_ConnectedUser,
            token,
            handleTokenAndId,
          ]}
        />
      </div>
    </div>
  );
}
