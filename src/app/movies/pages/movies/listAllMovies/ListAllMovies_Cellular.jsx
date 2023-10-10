// import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  //Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typography } from "@mui/material";
import GlobalBtns from "../../../components/layouts/btns/GlobalBtns";
import { BsHandIndexThumb } from "react-icons/bs";
// COMPONENTS UTILS
import { Pagination } from "../../../components/utils";

export default function ListAllMovies_Cellular({
  allMovies,
  countAllMovies,
  page,
  setPage,
  limit,
}) {
  function TruncateDesc(str) {
    return str.length > 10 ? str.substring(0, 200) + "..." : str;
  }

  return (
    <div style={{ paddingTop: "50px" }}>
      <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant='h5'>
        {allMovies.length} films sur cette page
      </Typography>
      <Pagination
        page={page}
        countAllMovies={countAllMovies}
        setPage={setPage}
        limit={limit}
      />
      <div className='container'>
        {/* <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        > */}
          {/* {allMovies
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
                <SwiperSlide
                  className='iii'
                  style={{
                    backgroundPosition: "center",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    color: "#FFF",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    alt='poster film'
                    src={img}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  />
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      border: "3px solid #F00",
                      borderRadius: "28px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      padding: "15px",
                    }}
                  >
                    <Typography className='oo' variant='h2'>
                      Swiper
                    </Typography>
                    <div className="iip">
                      <BsHandIndexThumb
                      className="icon"
                        color='#F00'
                        size={45}
                        style={{ zIndex: 7 }}
                      />
                    </div>
                    <Typography sx={{ fontWeight: "bold" }} variant='h6'>
                      {name}
                    </Typography>
                    <Typography sx={{ margin: "5px 0" }} variant='body2'>
                      <strong>Réalisateurs :</strong> {realisators}
                    </Typography>
                    <Typography sx={{ margin: "5px 0" }} variant='body2'>
                      <strong>Acteurs :</strong> {actors}
                    </Typography>
                    {desc === "" && (
                      <div>
                        <Typography variant='body1'>
                          {" "}
                          Pas de description
                        </Typography>
                      </div>
                    )}

                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${TruncateDesc(desc)}`,
                      }}
                      style={{ fontSize: "0.5em" }}
                    />
                    <div style={{ bottom: 25, position: "absolute" }}>
                      <GlobalBtns
                        urlBtn={`../movies/${_id}`}
                        textBtn="Plus d'informations"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )} */}
          {/* <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
              <ion-icon name='arrow-back-outline'></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
              <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
            <div className='swiper-pagination'></div>
          </div> */}
        {/* </Swiper> */}

        <div className='sss'></div>
      </div>
    </div>
  );
}






