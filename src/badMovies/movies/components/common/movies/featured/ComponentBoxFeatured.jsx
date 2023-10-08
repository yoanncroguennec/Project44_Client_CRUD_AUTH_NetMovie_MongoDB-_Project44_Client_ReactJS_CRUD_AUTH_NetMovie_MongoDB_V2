import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
// LAYOUTS
import { GlobalBtn } from "../../../layouts";
// STYLES
import {
  BoxActiveDropdown,
  BoxBGTitleDescBtnsMovieRandom,
  BoxFeatured,
  BoxThreeBtns,
  Dropdown,
  DropdownBtn,
  DropdownItem,
  TypoNameMovieRandom,
} from "./StylesFeatured";
// UTILS ASSETS DATAS
import { valueCategoryDropdownFeatured } from "../../../../../utils/assets/movies/data";
// ICONS
import {
  BsFillPlayFill,
  BsInfoCircle,
  SlArrowDown,
} from "../../../../../utils/assets/movies/icons";
import { useState } from "react";
const sizeIconDesktop = 35;
const sizeIconMobile = 20;

export default function ComponentBoxFeatured({
    name,
  randomMovie,
  OpenModalTrailer,
  CloseModalInfosMovie,
  OpenModalTheWholeFilm,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// DROPDOWN CATEGORIES ////////////////////
  const type = "movie";
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  //////////////////// DATA THREE BTNS ////////////////////
  const dataThreeBtns = [
    {
      onClickAction: OpenModalTrailer,
      icon: (
        <BsFillPlayFill size={matches ? sizeIconMobile : sizeIconDesktop} />
      ),
      title: "Bande-Annonce",
    },
    {
      onClickAction: CloseModalInfosMovie,
      icon: <BsInfoCircle size={matches ? sizeIconMobile : sizeIconDesktop} />,
      title: "Infos",
    },
    {
      onClickAction: OpenModalTheWholeFilm,
      icon: (
        <BsFillPlayFill size={matches ? sizeIconMobile : sizeIconDesktop} />
      ),
      title: "Voir le film",
    },
  ];

    function truncateDesc(str) {
      return str.length > 10 ? str.substring(0, 150) + "..." : str;
    }

  return (
    <BoxFeatured>
      {type && (
        <Dropdown>
          <DropdownBtn onClick={() => setIsActive(!isActive)}>
            <Typography>
              {selected || "GENRE"} ({type === "movie" ? "Films" : "Séries"})
            </Typography>
            <SlArrowDown size={25} />
          </DropdownBtn>
          {isActive && (
            <>
              <BoxActiveDropdown>
                {valueCategoryDropdownFeatured.map(
                  ({ textCategory, urlCategory, index }) => (
                    <Link
                      key={index}
                      to={urlCategory}
                      state={{
                        movieCategory: `${textCategory}`,
                      }}
                      onClick={(e) => setSelected(e.target.textContent)}
                    >
                      <DropdownItem>
                        <Typography>{textCategory}</Typography>
                      </DropdownItem>
                    </Link>
                  )
                )}
              </BoxActiveDropdown>
            </>
          )}
        </Dropdown>
      )}
      <BoxBGTitleDescBtnsMovieRandom matches={matches}>
        <TypoNameMovieRandom variant={matches ? "h6" : "h4"}>
          {name}
        </TypoNameMovieRandom>

        <Typography>{truncateDesc(`${randomMovie.desc}`)}</Typography>

        <BoxThreeBtns>
          {dataThreeBtns.map(({ onClickAction, icon, title }) => (
            <GlobalBtn
              colorIconBtn='#FFF'
              onClickAction={onClickAction}
              iconBtn={icon}
              textBtn={title}
            />
          ))}
        </BoxThreeBtns>
      </BoxBGTitleDescBtnsMovieRandom>
    </BoxFeatured>
  );
}
