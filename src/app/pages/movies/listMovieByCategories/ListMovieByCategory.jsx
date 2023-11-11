import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
// import { BoxMovieGenre } from "../../../components/common";
// COMPONENTS UTILS
import {
  BooleanIfMovieViewed_Rating,
  LoaderSpinner,
  ScrollIndicatorProgressBar,
  BackToTop,
} from "../../../components/utils";
// STYLES
import {
  BoxListMovies,
  styleLink,
  RootListMovies,
  TypoTitle,
  BoxNoDescription,
  TypoTitlePage,
} from "./StylesListMovieByCategory";
// FUNCTIONS
import { TruncateDesc } from "../../../utils/functions";

//////////////////// EXPORT FUNCTION PAGE ////////////////////
export default function ListMovieByCategory() {
  // STATES
  const location = useLocation();
  const { movieCategory } = location.state || {};

  // GET API All MOVIES BY CATEGORY
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllMoviesByCategory = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/sortByMovieGenre?genre=${movieCategory}`;
        const { data } = await axios.get(url);
        // console.log("data", data);
        setMoviesByGenre(data.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMoviesByCategory();
  }, []);

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const styleImg = {
    borderRadius: "50%",
    float: "left",
    height: `${matches ? "100px" : "200px"}`,
    margin: "0 20px 5px 0",
    objectFit: "cover",
    shapeOutside: "margin-box",
    width: `${matches ? "100px" : "200px"}`,
  };

  //////////////////// RETURN ////////////////////
  return loading ? (
    <LoaderSpinner />
  ) : (
    <>
      <ScrollIndicatorProgressBar />
      <BackToTop />
      <TypoTitlePage variant='h4'>
        {movieCategory} / Nombres de films : {moviesByGenre.length}
      </TypoTitlePage>

      <BoxListMovies>
        {moviesByGenre
          // sortByAlphabeticalOrder
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          ?.map(
            ({
              _id,
              name,
              desc,
              realisators,
              actors,
              favorite,
              watch,
              country,
              genre,
              img,
              year,
              rating,
              index,
            }) => (
              <Link key={index} to={`../movies/${_id}`} style={styleLink}>
                <RootListMovies>
                  <img
                    alt='movie'
                    src={img}
                    height={750}
                    style={styleImg}
                    width={750}
                  />
                  <BooleanIfMovieViewed_Rating
                    rating={rating}
                    favorite={favorite}
                    watch={watch}
                  />
                  <TypoTitle variant={matches ? "h6" : "h5"}>
                    {name} ({year} - {country})
                  </TypoTitle>
                  <Typography variant='body1'>
                    <strong>Réalisateurs :</strong> {realisators}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Acteurs :</strong> {actors}
                  </Typography>
                  {/* <BoxMovieGenre genre={genre} /> */}
                  {desc === "" && (
                    <BoxNoDescription>
                      <Typography variant='h6'> Pas de description</Typography>
                    </BoxNoDescription>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${TruncateDesc(desc)}`,
                    }}
                  />
                </RootListMovies>
              </Link>
            )
          )}
      </BoxListMovies>
    </>
  );
}
