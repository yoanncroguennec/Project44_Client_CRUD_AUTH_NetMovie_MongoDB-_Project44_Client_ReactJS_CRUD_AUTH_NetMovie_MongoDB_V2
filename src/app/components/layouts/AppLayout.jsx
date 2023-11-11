import React, { useEffect, useState } from "react";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import NavbarBottomCellular from "./navbar/navbarBottomCellular/NavbarBottomCellular";
import Navbar from "./navbar/Navbar";

// COMMON UTILS
// import { Navbar } from "../../../../badMovies/movies/components/layouts";
// import NavbarResponsive from "../../../../badMovies/movies/components/layouts/navbar/NavbarResponsive";

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
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
    <div
      style={{
        background: "transparent",
        height: `${matches && "100vh"}`,
      }}
    >
      <div
        style={{
          background: "#000",
          color: "#F00",
          paddingBottom: `${matches && "50px"}`,
          height: `${matches && "100vh"}`,
          overflow: `${matches && "scroll"}`,
          // zIndex: "-150",
        }}
      >
        <Navbar
          id_Of_ConnectedUser={id_Of_ConnectedUser}
          token={token}
          handleTokenAndId={handleTokenAndId}
        />
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

      {matches && <NavbarBottomCellular />}
    </div>
  );
}
