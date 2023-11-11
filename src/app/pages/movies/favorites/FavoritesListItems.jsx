import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
// STYLES
import {
  RootFavoritesListItems,
  TypoTitleMovie,
  stylesImgMovie,
} from "./StylesFavoritesListItems";

export default function FavoritesListItems({ item }) {
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

  const { _id, img, name, desc } = movie;
  function truncateDesc(str) {
    return str.length > 10 ? str.substring(0, 250) + "..." : str;
  }

  return (
    <RootFavoritesListItems>
      <img src={img} style={stylesImgMovie} />
      <TypoTitleMovie variant='h5'>{name}</TypoTitleMovie>
      <Typography variant='h6'>{truncateDesc(`${desc}`)}</Typography>

      <Button href={`../movies/${_id}`} variant='outlined'>
        Voir +
      </Button>
    </RootFavoritesListItems>
  );
}
