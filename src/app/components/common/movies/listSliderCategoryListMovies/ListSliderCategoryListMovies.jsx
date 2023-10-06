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

  return (
    <RootRow maxWidth='xl'>
      <BoxRow>
        <TypoTitleListSliderCategoryListMovies variant='h5'>
          {title}
        </TypoTitleListSliderCategoryListMovies>
        <BoxRowIndividually>
          <BiChevronLeft
            size={22}
            style={styleBiChevronLeft}
            onClick={() => handleClick_Btns_Slider_CategoryListMovies("left")}
          />
          <BoxListMovies ref={rowRef}>
            {content
              // .slice(
              //   0,
              //   5
              // )
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
