import React, { useState, useEffect } from "react";
import { WelcomePopupAnnouncingTheLatestfilmsAndSeries } from "../../components/layouts";
import {
  BoxNetflix,
  RootHome,
  ThreeBoxNetflixSpan,
  TypoTitleHome,
} from "./StylesHome";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const delay = 5;

  useEffect(() => {
    let timer1 = setTimeout(() => setOpenModal(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);


  return (
    <>
      {/* ATTENTION !
          PUT THIS PART OF THE STYLES JSX WITH "@keyframes" BECAUSE IT DOESN'T WORK WITH "MUI"  */}
      <style>
        {`
              .stylesSpanLeft{
                  animation: anim 1s linear forwards;
                  animation-delay: 1s;
                  bottom: 0;
                  left: 0;
                  
              }

              .StylesSpanCenter{
                  animation: anim 1s linear forwards;
                  animation-delay: 2s;
                  box-shadow: 0 0 50px #000;
                  left: 0;
                  transform: skewX(26.5deg);
                  transform-origin: top left;
                  top: 0;                  
                  z-index: 2;
                }
                              
                .StylesSpanRight{
                    animation: anim 1s linear forwards;
                    animation-delay: 3s;
                    bottom: 0;
                    right: 0;
                }

                @keyframes anim {
                    100% {
                        height: 100%;
                    }
                }
            `}
      </style>
      {/* PART CODE JSX */}
      <RootHome>
        <BoxNetflix>
          <ThreeBoxNetflixSpan component='span' className='stylesSpanLeft'/>
          <ThreeBoxNetflixSpan component='span' className='StylesSpanCenter'/>
          <ThreeBoxNetflixSpan component='span' className='StylesSpanRight'/>
        </BoxNetflix>
        <TypoTitleHome variant='h2'>Net Movie</TypoTitleHome> */
        {openModal ? <WelcomePopupAnnouncingTheLatestfilmsAndSeries /> : ""}
      </RootHome>
    </>
  );
}
