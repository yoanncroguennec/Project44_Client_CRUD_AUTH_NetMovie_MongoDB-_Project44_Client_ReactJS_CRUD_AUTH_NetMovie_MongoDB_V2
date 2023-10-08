import React from 'react'
import slide_image_1 from "./img_1.jpg";
import slide_image_2 from "./img_2.jpg";
import slide_image_3 from "./img_3.jpg";
import slide_image_4 from "./img_4.jpg";
import slide_image_5 from "./img_5.jpg";
import slide_image_6 from "./img_6.jpg";
import slide_image_7 from "./img_7.jpg";
export default function ListAllMovies_Cellular() {
  return (
    <div>
      {/* <!--image card layout start--> */}
      <div class='container'>
        {/* <!--image row start--> */}
        <div class='row'>
          {/* <!--image card start--> */}
          <div class='image'>
            <img src={slide_image_1} alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end-->
        <!--image card start--> */}
          <div class='image'>
            <img src='2.jpg' alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end-->
        <!--image card start--> */}
          <div class='image'>
            <img src='3.jpg' alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end--> */}
        </div>
        {/* <!--image row end-->
      <!--image row start--> */}
        <div class='row'>
          {/* <!--image card start--> */}
          <div class='image'>
            <img src='4.jpg' alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end-->
        <!--image card start--> */}
          <div class='image'>
            <img src='5.jpg' alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end-->
        <!--image card start--> */}
          <div class='image'>
            <img src='6.jpg' alt='' />
            <div class='details'>
              <h2>
                Your <span>Title</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class='more'>
                <a href='#' class='read-more'>
                  Read <span>More</span>
                </a>
                <div class='icon-links'>
                  <a href='#'>
                    <i class='fas fa-heart'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-eye'></i>
                  </a>
                  <a href='#'>
                    <i class='fas fa-paperclip'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--image card end--> */}
        </div>
        {/* <!--image row end--> */}
      </div>
      {/* <!--image card layout end--> */}
    </div>
  );
}



// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// import slide_image_1 from "./img_1.jpg";
// import slide_image_2 from "./img_2.jpg";
// import slide_image_3 from "./img_3.jpg";
// import slide_image_4 from "./img_4.jpg";
// import slide_image_5 from "./img_5.jpg";
// import slide_image_6 from "./img_6.jpg";
// import slide_image_7 from "./img_7.jpg";


// export default function ListAllMovies_Cellular({
//   allMovies,
//   countAllMovies,
//   styleImg,
//   TruncateDesc,
// }) {
//   return (
//     <div className='container'>
//       {/* <h1 className='heading'>Flower Gallery</h1> */}
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className='swiper_container'
//       >
//         <SwiperSlide style={{ backgroundImage: `url(${slide_image_1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
//           <img src={slide_image_1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt='slide_image' />
//         </SwiperSlide>

//         <div className='slider-controler'>
//           <div className='swiper-button-prev slider-arrow'>
//             <ion-icon name='arrow-back-outline'></ion-icon>
//           </div>
//           <div className='swiper-button-next slider-arrow'>
//             <ion-icon name='arrow-forward-outline'></ion-icon>
//           </div>
//           <div className='swiper-pagination'></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }
