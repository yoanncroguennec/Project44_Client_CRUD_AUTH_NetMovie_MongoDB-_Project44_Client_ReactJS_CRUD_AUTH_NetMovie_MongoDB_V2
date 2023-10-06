import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Featured,
  ListSliderCategoryListMovies,
} from "../../../components/common";

export default function Page_Featured_And_SliderCategoryListMovies() {
  const [categoryListMovie, setCategoryListMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/categoryListMovie`
        );
        console.log("categoryListMovie :", res.data.list);
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
    <div
      // A REVOIR LE BG COLOR CAR A SUPRIMER ET METTRE UN TOGLLE DARK MODE A LA RACINE
      style={{ background: "#000" }}
    >
      <Featured />
      {categoryListMovie.map((list, index) => (
        <ListSliderCategoryListMovies key={index} list={list} />
      ))}
    </div>
  );
}
