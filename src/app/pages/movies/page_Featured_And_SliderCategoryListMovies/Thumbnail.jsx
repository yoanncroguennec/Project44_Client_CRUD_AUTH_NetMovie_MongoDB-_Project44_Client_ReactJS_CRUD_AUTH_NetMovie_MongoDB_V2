import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// STYLES
import { styleLink, styleImg, TypoTitleOfMovie} from "./StylesThumbnail";


export default function Thumbnail({ item }) {
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

  const { _id, img, name } = movie

  return (
    <Link to={`../movies/${_id}`} style={styleLink}>
      <div style={{ overflow: "" }}>
        <img src={img} alt='movie poster' style={styleImg} />
      </div>
      <TypoTitleOfMovie variant='h4'>
        {name}
      </TypoTitleOfMovie>
    </Link>
  );
}
