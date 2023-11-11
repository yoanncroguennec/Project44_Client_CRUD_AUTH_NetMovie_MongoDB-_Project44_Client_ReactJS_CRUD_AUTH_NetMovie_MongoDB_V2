import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
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
import React, { useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import useAppContext from "../../../utils/contexts/favouritesMovie/FavouritesMovie";

export default function ListAllMovies_Desktop({
  allMovies,
  countAllMovies,
  styleImg,
  TruncateDesc,
  page,
  setPage,
  limit,
}) {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );
  const { favorites, addToFavorites, removeToFavorites } = useAppContext;
  console.log("favorite :", favorites);

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
            }) => {
              const isFavourited = storageItem.includes(_id);

              const handleToggleFavourite = () => {
                if (!isFavourited) {
                  const newStorageItem = [...storageItem, _id];
                  setStorageItem(newStorageItem);
                  localStorage.setItem(
                    "favourites",
                    JSON.stringify(newStorageItem)
                  );
                } else {
                  const newStorageItem = storageItem.filter(
                    (savedId) => savedId !== _id
                  );
                  setStorageItem(newStorageItem);
                  localStorage.setItem(
                    "favourites",
                    JSON.stringify(newStorageItem)
                  );
                }
              };

              return (
                <Link
                  key={index}
                  // to={`../movies/${_id}`} style={styleLink}
                >
                  <RootListMovies>
                    <img
                      alt='movie'
                      src={img}
                      height={750}
                      style={styleImg}
                      width={750}
                    />
                    <IconButton onClick={handleToggleFavourite}>
                      {isFavourited ? (
                        <MdFavorite color='error' />
                      ) : (
                        <MdOutlineFavoriteBorder color='error' />
                      )}
                    </IconButton>
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
                        <Typography variant='h6'>
                          {" "}
                          Pas de description
                        </Typography>
                      </BoxNoDescription>
                    )}
                    <Typography variant='h6'>
                      {" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${desc.slice(0, 155)}...`,
                        }}
                      />
                    </Typography>
                  </RootListMovies>
                </Link>
              );
            }
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
