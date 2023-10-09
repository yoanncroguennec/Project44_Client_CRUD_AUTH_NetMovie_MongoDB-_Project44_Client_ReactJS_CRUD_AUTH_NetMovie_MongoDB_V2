import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// COMPONENTS UTILS
import {
  BooleanIfMovieViewed_Rating,
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

export default function ListAllMovies_Desktop({
  allMovies,
  countAllMovies,
  styleImg,
  TruncateDesc,
  page,
  setPage,
  limit,
}) {
  return (
    <div>
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
                  {/* <BooleanIfMovieViewed_Rating
                    rating={rating}
                    favorite={favorite}
                    watch={watch}
                  /> */}
                  {/* <TypoTitle variant={matches ? "h6" : "h5"}>
                    {name} ({year} - {country})
                  </TypoTitle> */}
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
