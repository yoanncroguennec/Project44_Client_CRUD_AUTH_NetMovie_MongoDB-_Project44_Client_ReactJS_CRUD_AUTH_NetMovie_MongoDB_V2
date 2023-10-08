import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  RootSlide_BG_Mobie,
  BoxListMovies,
  TypoTitle,
  BoxNoDescription,
  StylesTrailer,
  BoxTrailer_MovieLink,
  BoxSlideTrackImgs,
  SlideImgs,
} from "./StylesMovie";
import axios from "axios";

//////////////////// EXPORT FUNCTION PAGE ////////////////////
export default function Movie_ID_Layout() {
  // GET API All MOVIES
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        setAllMovies(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [allMovies]);

  return (
    <div>
      <RootSlide_BG_Mobie>
        <div>
          <BoxSlideTrackImgs>
            {allMovies
              // slice = limit
              // .slice(4, 9)
              .map(({ img }) => (
                <SlideImgs>
                  <img
                    src={img}
                    style={{
                      height: "100%",
                      width: "100%",
                      // transition: "transform 1s",
                    }}
                  />
                </SlideImgs>
              ))}
          </BoxSlideTrackImgs>
          <BoxSlideTrackImgs>
            {allMovies
              .reverse()
              // slice = limit
              // .slice(4, 9)
              .map(({ img }) => (
                <SlideImgs>
                  <img
                    src={img}
                    style={{
                      height: "100%",
                      width: "100%",
                      // transition: "transform 1s",
                    }}
                  />
                </SlideImgs>
              ))}
          </BoxSlideTrackImgs>
          <BoxSlideTrackImgs>
            {allMovies
              // slice = limit
              .slice(9)
              .map(({ img }) => (
                <SlideImgs>
                  <img
                    src={img}
                    style={{
                      height: "100%",
                      width: "100%",
                      // transition: "transform 1s",
                    }}
                  />
                </SlideImgs>
              ))}
          </BoxSlideTrackImgs>
        </div>
      </RootSlide_BG_Mobie>
      <div
        style={
          {
            //   flexDirection: "column",
            //   height: "97vh",
            //   width: "100vw",
            //   // marginTop: "70px",
          }
        }
      >
        <Outlet context={[]} />
      </div>
    </div>
  );
}
