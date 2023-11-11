import { useState, useRef } from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
// LAYOUTS
import { GlobalBtns } from "../../../layouts";
// UTILS HOOKS
import { useOnHoverOutside } from "../../../../utils/hooks/movies/UseOnHoverOutside"
// UTILS ASSETS DATAS
import { valueCategoryDropdownFeatured } from "../../../../utils/assets/data";
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
// ICONS
import {
  BsFillPlayFill,
  BsInfoCircle,
  SlArrowDown,
} from "../../../../utils/assets/icons";
const sizeIconDesktop = 35;
const sizeIconMobile = 20;

// EXPORT FUNCTION
export default function ComponentBoxFeatured({
  name,
  randomMovie,
  OpenModalTrailer,
  CloseModalInfosMovie,
  OpenModalTheWholeFilm,
}) {
  const dropdownRef = useRef(null); // Create a reference for dropdown container

  /// RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  /// DROPDOWN CATEGORIES
  const type = "movie";
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  /// DATA THREE BTNS
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
  ];

  function truncateDesc(str) {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  }

  // Function to close dropdown
  const closeHoverMenu = () => {
    setIsActive(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <BoxFeatured>
      {type && (
        <Dropdown ref={dropdownRef}>
          <DropdownBtn
            onClick={() => setIsActive(!isActive)}
            onMouseOver={() => setIsActive(true)} //use mouseover event to show dropdown
          >
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
          {/* Two Btns Trailer + Info Movie */}
          {dataThreeBtns.map(({ onClickAction, icon, title }) => (
            <GlobalBtns
              colorIconBtn='#FFF'
              onClickAction={onClickAction}
              iconBtn={icon}
              textBtn={title}
            />
          ))}
          {/* Btn The whole Movie */}
          {matches ? (
            ""
          ) : (
            <GlobalBtns
              colorIconBtn='#FFF'
              onClickAction={OpenModalTheWholeFilm}
              iconBtn={
                <BsFillPlayFill
                  size={matches ? sizeIconMobile : sizeIconDesktop}
                />
              }
              textBtn='Voir le film'
            />
          )}
        </BoxThreeBtns>
      </BoxBGTitleDescBtnsMovieRandom>
    </BoxFeatured>
  );
}
