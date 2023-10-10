import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
// Styles
import {
  RootItemListSliderCategoryListMovies,
  NameMovieItem,
} from "./StylesItemListSliderCategoryListMovies"

export default function ItemListSliderCategoryListMovies({ item }) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const StylesImgItem = {
    height: `${matches ? "120px" : "200px"}`,
    width: `${matches ? "200px" : "450px"}`,
  };

  /// GET OBTAIN INFOS ON EACH ITEM IN THE CATEGORY SLIDER
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/movies/` + item
        );
        // console.log("movieId :", res.data);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link key={movie._id} to={`../movies/${movie._id}`}>
      <RootItemListSliderCategoryListMovies>
        <NameMovieItem variant={matches ? "string" : "body2"}>
          {movie.name}
        </NameMovieItem>
        <img alt={movie.name} src={movie.img} style={StylesImgItem} />
      </RootItemListSliderCategoryListMovies>
    </Link>
  );
}
