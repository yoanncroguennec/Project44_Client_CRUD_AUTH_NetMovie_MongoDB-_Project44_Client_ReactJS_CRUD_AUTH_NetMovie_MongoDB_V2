import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, List } from "@mui/material";
// STYLES
import "./Extend_Admin_CategoryListMovie.css";
export default function Extend_Admin_CategoryListMovie({ idMovie }) {
  const [movie, setMovie] = useState({});
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/movies/` + idMovie
        );
        console.log("movieId :", res.data);
        // setGenres(res.data.genre);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [idMovie]);

  const { _id, img, name, genre, realisators, actors, desc } = movie;

  return (
    <Link
      key={_id}
      style={{
        background: "red",
        borderBottom: "3px solid green",
        textDecoration: "none",
        display: "inline-block",
      }}
      // to={`../movies/${_id}`}
    >
      <List>
        <div class='content_img'>
          <tr>
            <td>
              <Typography style={{ width: "300px" }} variant='h5'>
                {_id}
              </Typography>
            </td>
            <td>
              <Typography style={{ width: "400px" }} variant='h5'>
                {name}
              </Typography>
            </td>
            <td>
              <Typography style={{ width: "200px" }} variant='h5'>
                genre
              </Typography>
            </td>
            <td>
              <Typography style={{ width: "400px" }} variant='h5'>
                {realisators}
              </Typography>
            </td>
            <td>
              <Typography style={{ width: "1000px" }} variant='h5'>
                {actors}
              </Typography>
            </td>
            <td>
              <Typography style={{ width: "1000px" }} variant='h5'>
                {desc}
              </Typography>
            </td>
            <td>
              <Typography
                sx={{ color: "#000", textAlign: "center" }}
                variant='h6'
              >
                {" "}
                {genre?.map((item, index) => (
                  <div key={index}>
                    {item}
                    {index !== movie.genre.length - 1 && " /"}
                  </div>
                ))}
              </Typography>
            </td>
          </tr>
          {/* ATTENTION A SURTOUT PAS SUPPRIMER CETT DIV, CAR SERT POUR AFFICHER L'IMG AU-DESSUS DU TEXT VOIR INDEX.CSS */}
          <div>
            <img
              src={img}
              style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </List>
    </Link>
  );
}
