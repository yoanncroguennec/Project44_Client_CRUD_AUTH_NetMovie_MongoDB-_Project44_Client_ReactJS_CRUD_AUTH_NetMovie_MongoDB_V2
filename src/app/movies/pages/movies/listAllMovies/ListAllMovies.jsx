import { useEffect, useState } from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
// COMPONENTS COMMON
import { BooleanIfMovieViewed_Rating } from "../../../components/utils";
// COMPONENTS UTILS
import {
  LoaderSpinner,
  ScrollIndicatorProgressBar,
  BackToTop,
  Pagination,
} from "../../../components/utils";
// STYLES
import {
  TypoTitlePage,
  BoxListMovies,
  styleLink,
  RootListMovies,
  TypoTitle,
  BoxNoDescription,
} from "./StylesListAllMovies";
// FUNCTIONS
import { TruncateDesc } from "../../../../utils/functions";

//////////////////// EXPORT FUNCTION PAGE ////////////////////
export default function ListAllMovies() {
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
    <LoaderSpinner />
  ) : (
    <div style={{ background: "blue", height: "90vh", position: "relative", 
    // overflow: "scroll",
    }}>
      <ScrollIndicatorProgressBar />
      <BackToTop />
      <TypoTitlePage variant='h4'>
        Nombres de films : {countAllMovies} films
      </TypoTitlePage>
      <Pagination
        page={page}
        countAllMovies={countAllMovies}
        setPage={setPage}
        limit={limit}
      />
      <BoxListMovies>
        {allMovies
          // sortByAlphabeticalOrder
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(
            ({
              _id,
              name,
              desc,
              realisators,
              actors,
              favorite,
              watch,
              country,
              genre,
              img,
              year,
              rating,
              index,
            }) => (
              <Link key={index} to={`../movies/${_id}`} style={styleLink}>
                <RootListMovies>
                  <img
                    alt='movie'
                    src={img}
                    height={750}
                    style={styleImg}
                    width={750}
                  />
                  <BooleanIfMovieViewed_Rating
                    rating={rating}
                    favorite={favorite}
                    watch={watch}
                  />
                  <TypoTitle variant={matches ? "h6" : "h5"}>
                    {name} ({year} - {country})
                  </TypoTitle>
                  <Typography variant='body1'>
                    <strong>Réalisateurs :</strong> {realisators}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Acteurs :</strong> {actors}
                  </Typography>
                  {/* <BoxMovieGenre genre={genre} /> */}
                  {desc === "" && (
                    <BoxNoDescription>
                      <Typography variant='h6'> Pas de description</Typography>
                    </BoxNoDescription>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${TruncateDesc(desc)}`,
                    }}
                  />
                </RootListMovies>
              </Link>
            )
          )}
      </BoxListMovies>
      <Pagination
        page={page}
        countAllMovies={countAllMovies}
        setPage={setPage}
        limit={limit}
      />
    </div>
  );
}
