import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Featured,
  ListSliderCategoryListMovies,
} from "../../../components/common";
import Row from "./Row";
import { Box } from "@mui/material";

export default function Page_Featured_And_SliderCategoryListMovies() {
  const [categoryListMovie, setCategoryListMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/categoryListMovie`
        );
        // console.log("categoryListMovie :", res.data.list);
        setCategoryListMovie(res.data.list);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);

  return loading ? (
    <>chargement</>
  ) : (
    <Box>
      <Featured />
      {categoryListMovie?.map((list, index) => (
        <Row key={index} list={list} />
      ))}
    </Box>
  );
}
