import { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";

// FUNCTIONS
import { TruncateDesc } from "../../../utils/functions";
import ListAllMovies_Desktop from "./ListAllMovies_Desktop";
import ListAllMovies_Cellular from "./ListAllMovies_Cellular";

//////////////////// EXPORT FUNCTION PAGE ////////////////////
export default function Index() {
  /// PAGINATION
  const [countAllMovies, setCountAllMovies] = useState();
  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  // GET API All MOVIES
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies?page=${page}&limit=${limit}`;
        const { data } = await axios.get(url);
        setAllMovies(data.movies);
        setCountAllMovies(data.total);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [page, limit]);

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
    <></>
  ) : (
    // <LoaderSpinner />
    <div style={{ background: "#FFF" }}>
      {matches ? (
        <ListAllMovies_Cellular
          allMovies={allMovies}
          countAllMovies={countAllMovies}
          styleImg={styleImg}
          TruncateDesc={TruncateDesc}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      ) : (
        <ListAllMovies_Desktop
          allMovies={allMovies}
          countAllMovies={countAllMovies}
          styleImg={styleImg}
          TruncateDesc={TruncateDesc}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      )}
    </div>
  );
}
