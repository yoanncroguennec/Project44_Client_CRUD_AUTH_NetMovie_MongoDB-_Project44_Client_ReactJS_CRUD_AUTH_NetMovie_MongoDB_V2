import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { List, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Extend_DetailedListOfFilmsByCategory({ idMovie }) {
  // console.log("idMovie :", idMovie);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/" +
            idMovie
        );
        setGenres(res.data.genre);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [idMovie]);

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Link key={movie._id} to={`../movies/${movie._id}`}>
      <List>
        <div class='content_img'>
          <Typography
            sx={{ color: "#000", textAlign: "center" }}
            variant='body2'
          >
            {" "}
            {movie.name} -{" "}
            {genres.map((item, index) => (
              <div key={index}>
                {item}
                {index !== movie.genre.length - 1 && " /"}
              </div>
            ))}
          </Typography>
          {/* ATTENTION A SURTOUT PAS SUPPRIMER CETT DIV, CAR SERT POUR AFFICHER L'IMG AU-DESSUS DU TEXT VOIR INDEX.CSS */}
          <div>
            <img
              src={movie.img}
              style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </List>
    </Link>
  );
}
