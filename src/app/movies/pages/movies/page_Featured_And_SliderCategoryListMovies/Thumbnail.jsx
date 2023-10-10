import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// NEXT


//////////////////// STYLES ////////////////////
const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  height: "150px",
  minWidth: "280px",
  overflowX: "hidden",
  position: "relative",
  textDecoration: "none",
  zIndex: 99,
};

const styleImg = {
  overflow: "hidden",
  zIndex: "-10",

  "&::hover": {
    width: "100%",
    webkitTransform: "scale(1.3)",
    transform: "scale(1.3)",
    transition: "1s ease-in-out",
    // -webkit-transform:scale(1.3);transform:scale(1.3)", -webkit-transition:"1s ease-in-out;transition:1s ease-in-out"
  },
};
const Thumbnail = ({ item }) => {
  // console.log(movie);

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
    <Link to={`../movies/${movie._id}`} style={styleLink}>
      <div style={{ overflow: "hidden" }}>
        <img
          src={movie.img}
          className='imgThumbnail'
          // className='rounded-sm object-cover md:rounded'
          alt='movie poster'
          style={styleImg}
        />
      </div>
      <Typography style={{ background: "rgba(0, 0, 0, 0.6" }}>
        {movie.name}
      </Typography>
    </Link>
  );
};

export default Thumbnail;
