import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { UserLocationIP_AddressAndLocalTimeDate } from "../../utils";
// import DropdownNavbar from "../dropdown/dropdownNavbar/DropdownNavbar";
// LAYOUTS
import { GlobalBtn } from "..";
// STYLES
import {
  RootNavbar,
  Typo_FirstLetter_Logo,
  Typo_SecondLetter_Logo,
  Typo_ThirdLetter_Logo,
  Typo_FourthLetter_Logo,
  Typo_FifthLetter_Logo,
  Typo_SixthLetter_Logo,
  Typo_SeventhLetter_Logo,
  Typo_EighthLetter_Logo,
} from "./StylesNavbar";
// ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { useEffect } from "react";
import { dataEvenMoreWebradiosAdditionApi } from "../../../../../app/utils/assets/music/data/dataEvenMoreWebradiosAdditionApi";

export default function Navbar({
  id_Of_ConnectedUser,
  token,
  handleTokenAndId,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <RootNavbar isScrolled={isScrolled} matches={matches}>
      <Link
        to='featured_SliderCategoryListMovies'
        style={{
          textDecoration: "none",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {" "}
        <Typo_FirstLetter_Logo matches={matches}>N</Typo_FirstLetter_Logo>
        <Typo_SecondLetter_Logo matches={matches}>E</Typo_SecondLetter_Logo>
        <Typo_ThirdLetter_Logo matches={matches}>T</Typo_ThirdLetter_Logo>
        <Typo_FourthLetter_Logo matches={matches}>M</Typo_FourthLetter_Logo>
        <Typo_FifthLetter_Logo matches={matches}>O</Typo_FifthLetter_Logo>
        <Typo_SixthLetter_Logo matches={matches}>V</Typo_SixthLetter_Logo>
        <Typo_SeventhLetter_Logo matches={matches}>I</Typo_SeventhLetter_Logo>
        <Typo_EighthLetter_Logo matches={matches}>E</Typo_EighthLetter_Logo>
      </Link>

      <UserLocationIP_AddressAndLocalTimeDate
        id_Of_ConnectedUser={id_Of_ConnectedUser}
      />
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* <img
        src='https://generations.fr/media/radio/generations-rohff-logo-smartphone1.webp'
        style={{ height: "100px", width: "100px" }}
      /> */}
      {/* METTRE UN HIDDEN SUR LE LIEN DONC TOUTE LA BALISE CONTROLS ET LAISSER L'IMAGE, RHOFF QUAND ON CLIQUE SUR LE BTN QUI EST L'IMAGE CA FAIT PLAY OU PAUSE */}
      {/* <audio
        src='https://generation-rohff.ice.infomaniak.ch/generation-rohff.mp3'
        controls
      /> */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {matches ? (
        ""
      ) : (
        <>
          <GlobalBtn
            urlBtn={`movies/listAllMovies`}
            textBtn={"Tous les films"}
          />
          <GiHamburgerMenu color='red' size={30} />
          {/* <DropdownNavbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      /> */}
        </>
      )}
    </RootNavbar>
  );
}