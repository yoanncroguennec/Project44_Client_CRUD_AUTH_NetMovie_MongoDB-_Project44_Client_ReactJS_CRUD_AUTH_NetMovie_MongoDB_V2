import React, { useRef } from "react";
// COMPONENTS COMMONS
import ItemListSliderCategoryListMovies from "./itemListSliderCategoryListMovies/ItemListSliderCategoryListMovies";
// STYLES
import {
  RootRow,
  BoxRow,
  TypoTitleListSliderCategoryListMovies,
  BoxRowIndividually,
  styleBiChevronLeft,
  BoxListMovies,
  styleBiChevronRight,
} from "./StylesListSliderCategoryListMovies";
// ICONS
import { BiChevronLeft, BiChevronRight } from "../../../../utils/assets/icons";
import { Typography } from "@mui/material";

////////////////// EXPORT FUNCTION ////////////////////
export default function ListSliderCategoryListMovies({ list }) {
  const rowRef = useRef(null);

  const handleClick_Btns_Slider_CategoryListMovies = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const { title, content } = list;
  const tt = `${content.length}`;
  console.log("tt :", tt);

  return (
    <RootRow maxWidth='xl'>
      <BoxRow>
        <TypoTitleListSliderCategoryListMovies variant='h5'>
          {title} : {content.length} films dans le slide
        </TypoTitleListSliderCategoryListMovies>

        {tt > 10 ? (
          <Typography color='error' variant='h2'>
            Pas plus de films
          </Typography>
        ) : (
          <Typography color='error' variant='h4'>
            Voir plus de films dans la catégorie
          </Typography>
        )}

        <BoxRowIndividually>
          <BiChevronLeft
            size={22}
            style={styleBiChevronLeft}
            onClick={() => handleClick_Btns_Slider_CategoryListMovies("left")}
          />

          <BoxListMovies ref={rowRef}>
            {content
              // .slice(0, 5)
              .map((item, index) => (
                <ItemListSliderCategoryListMovies key={index} item={item} />
              ))}
          </BoxListMovies>

          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick_Btns_Slider_CategoryListMovies("right")}
          />
        </BoxRowIndividually>
      </BoxRow>
    </RootRow>
  );
}
