import React, { useEffect, useState } from "react";
import axios from "axios";
import ComponentBoxFeatured from "./ComponentBoxFeatured";
import { useTheme, useMediaQuery } from "@mui/material";
// LAYOUTS
import { GlobalModauxFeatured } from "../../../layouts/index";
// STYLES
import { RootFeatured } from "./StylesFeatured";

export default function Featured() {
  const [randomMovie, setRandomMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const url = `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/randomMovie`;
        const { data } = await axios.get(url);
        // console.log("randomMovie :", data.randomMovie);
        setLoading(false);
        setRandomMovie(data.randomMovie);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomMovie();
  }, []);

  const { img, name } = randomMovie;

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// OPEN MODAL PLAYER TRAILER////////////////////
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [showPlayerTrailer, setShowPlayerTrailer] = useState(false);

  function OpenModalTrailer() {
    setOpenModalTrailer(true);
    setShowPlayerTrailer(true);
  }

  function CloseModalTrailer() {
    setOpenModalTrailer(false);
    setShowPlayerTrailer(false);
  }

  //////////////////// OPEN MODAL INFOS MOVIE ////////////////////
  const [openModalInfosMovie, setOpenModalInfosMovie] = useState(false);

  function CloseModalInfosMovie() {
    setOpenModalInfosMovie(!openModalInfosMovie);
  }

  //////////////////// OPEN MODAL THE WHOLE MOVIE ////////////////////
  const [modalTheWholeMovie, setModalTheWholeMovie] = useState(false);

  function OpenModalTheWholeFilm() {
    setModalTheWholeMovie(!modalTheWholeMovie);
  }
  function CloseModalTheWholeMovie() {
    setModalTheWholeMovie(false);
  }

  //////////////////// RETURN ////////////////////
  return loading ? (
    <>CHARGEMENT</>
  ) : (
    <RootFeatured img={img}>
      <ComponentBoxFeatured
        name={name}
        randomMovie={randomMovie}
        OpenModalTrailer={OpenModalTrailer}
        CloseModalInfosMovie={CloseModalInfosMovie}
        OpenModalTheWholeFilm={OpenModalTheWholeFilm}
      />

      <GlobalModauxFeatured
        randomMovie={randomMovie}
        /// TRAILER
        openModalTrailer={openModalTrailer}
        showPlayerTrailer={showPlayerTrailer}
        CloseModalTrailer={CloseModalTrailer}
        /// INFOS
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        CloseModalInfosMovie={CloseModalInfosMovie}
        /// THE WHOLE MOVIE
        modalTheWholeMovie={modalTheWholeMovie}
        CloseModalTheWholeMovie={CloseModalTheWholeMovie}
      />
    </RootFeatured>
  );
}
