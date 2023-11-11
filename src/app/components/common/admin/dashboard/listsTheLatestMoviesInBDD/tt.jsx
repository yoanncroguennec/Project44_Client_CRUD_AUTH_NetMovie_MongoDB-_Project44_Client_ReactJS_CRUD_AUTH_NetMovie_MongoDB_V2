import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function ListsTheLatestMoviesInBDD() {
  // GET API Display Latest Movies In BDD
  const [displayLatestMoviesInBDD, setdisplayLatestMoviesInBDD] = useState([]);
const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllDisplayLatestMoviesInBDD = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/displayLatestMoviesInBDD`;
        const { data } = await axios.get(url);
        // console.log("displayLatestMoviesInBDD :", data.movies);
        setdisplayLatestMoviesInBDD(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllDisplayLatestMoviesInBDD();
  }, [displayLatestMoviesInBDD]);

  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "'Sacramento', cursive",
          color: "red",
          fontWeight: "600",
        }}
        variant='h3'
      >
        Derniers films ajoutés sur Net Movie :"
      </Typography>
      listsTheLatestMoviesInBDD
      {displayLatestMoviesInBDD
        .slice(0, 10)
        .map(({ name, img }) => (
          <>
            rr{name}
            <img
              src={img}
              style={{
                height: "140px",
                width: "140px",
                // transition: "transform 1s",
              }}
            />
          </>
        ))}
    </div>
  );
}
