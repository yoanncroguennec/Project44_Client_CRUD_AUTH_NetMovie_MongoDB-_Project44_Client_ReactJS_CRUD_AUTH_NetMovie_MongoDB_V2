// LAYOUTS
import { ModalPlayerTrailer, ModalInfosMovie, ModalTheWholeFilm } from "../../index"

export default function GlobalModauxFeatured({
  randomMovie,
  /// TRAILER
  openModalTrailer,
  showPlayerTrailer,
  CloseModalTrailer,
  /// INFOS MOVIE
  openModalInfosMovie,
  setOpenModalInfosMovie,
  CloseModalInfosMovie,
  OpenModalTrailer,
  /// THE WHOLE MOVIE
  modalTheWholeMovie,
  CloseModalTheWholeMovie,
}) {
  const { name, desc, trailer, movieLink } = randomMovie;

  return (
    <div>
      {/* MODAL PLAYER TRAILER */}
      <ModalPlayerTrailer
        openModalTrailer={openModalTrailer}
        trailer={trailer}
        showPlayerTrailer={showPlayerTrailer}
        CloseModalTrailer={CloseModalTrailer}
      />

      {/* MODAL INFOS MOVIES */}
      <ModalInfosMovie
        name={name}
        desc={desc}
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        CloseModalInfosMovie={CloseModalInfosMovie}
        OpenModalTrailer={OpenModalTrailer}
      />

      {/* MODAL THE WHOLE FILM */}
      {/* <Typography color='error'>gfffffffffff</Typography> */}
      <ModalTheWholeFilm
        modalTheWholeMovie={modalTheWholeMovie}
        movieLink={movieLink}
        CloseModalTheWholeMovie={CloseModalTheWholeMovie}
      />
    </div>
  );
}
