import { useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ExtendNavbarBottomCellular from "./ExtendNavbarBottomCellular";
// ICONS
import {
  AiOutlineClose,
  FaPlus,
  GiHamburgerMenu,
} from "../../../../utils/assets/icons";
// IMGS
import {
  bgWebRadios,
  iconsRadio64,
  moreApplication,
  img4,
  television94,
  contact,
  myProfile,
} from "../../../../utils/assets/imgs";
// import NavbarBottom from "./navbar/navbarBottom/NavbarBottom";
// STYLES
import {
  BoxBtbnCloseMenuCircle,
  BoxBtnOpenCloseMenuCircle,
  RootNavbarStylesForCellularClosedAtTheBottom,
  RootNavbarStylesForCellularOpenAtTheBottom,
  BoxItemsAroundTheCircle,
  BoxIconItem,
  stylesIcon,
  BoxManagementBtnOpenCloseMenuCircle,
} from "./StylesNavbarBottomCellular";

const dataBtnMoreEffectOpeningCircleMenu = [
  ["", "#3E84E6", img4, television94],
  ["", "#15AB88", moreApplication],
  ["", "#EB5089", bgWebRadios, iconsRadio64],
  ["Mon profil", "#AFD91A", myProfile],
  ["Contact", "#F27127", contact],
];

export default function NavbarBottomCellular() {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [showNavBottom, setShowNavBottom] = useState(false);
  const [openBtnMoreCircleMenu, setOpenBtnMoreCircleMenu] = useState(false);

  function OpenBtnMoreCircleMenu() {
    setOpenBtnMoreCircleMenu((prevBool) => !prevBool);
  }

  return showNavBottom ? (
    <RootNavbarStylesForCellularOpenAtTheBottom matches={matches}>
      <BoxManagementBtnOpenCloseMenuCircle>
        <div style={{ height: "100%" }} onClick={OpenBtnMoreCircleMenu}>
          {openBtnMoreCircleMenu ? (
            <BoxBtbnCloseMenuCircle>
              <AiOutlineClose color='#F00' size={25} />
            </BoxBtbnCloseMenuCircle>
          ) : (
            <BoxBtnOpenCloseMenuCircle>
              <FaPlus color='#F00' size={25} />
            </BoxBtnOpenCloseMenuCircle>
          )}
        </div>
        {dataBtnMoreEffectOpeningCircleMenu.map(
          ([page, color, bgRounded, icon], index) => {
            // rotate(${(360/5) => 360° / 5 because 5 items in array "dataBtnMoreEffectOpeningCircleMenu"
            const rotation =
              (-223 / dataBtnMoreEffectOpeningCircleMenu.length) * index;
            const effectTransitionDelay = index * 75;
            return (
              <BoxItemsAroundTheCircle
                key={page}
                // PROPS FOR STYLES MUI
                bgRounded={bgRounded}
                openBtnMoreCircleMenu={openBtnMoreCircleMenu}
                effectTransitionDelay={effectTransitionDelay}
                rotation={rotation}
              >
                <BoxIconItem rotation={rotation}>
                  {icon && <img alt='icon' src={icon} style={stylesIcon} />}
                </BoxIconItem>
              </BoxItemsAroundTheCircle>
            );
          }
        )}
        <div
          onClick={() => setShowNavBottom(!showNavBottom)}
          style={{ background: "#FFF", width: "80px" }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant='caption'>
            Fermer Menu
          </Typography>
        </div>
      </BoxManagementBtnOpenCloseMenuCircle>
      {/* BEGIN CODE - PART ROOT NAVBAR FOR CELLULAR THE BOTTOM */}
      <ExtendNavbarBottomCellular />
      {/* END CODE - PART ROOT NAVBAR FOR CELLULAR THE BOTTOM */}
    </RootNavbarStylesForCellularOpenAtTheBottom>
  ) : (
    <RootNavbarStylesForCellularClosedAtTheBottom
      onClick={() => setShowNavBottom(!showNavBottom)}
    >
      <div
        style={{
          background: "#FFF",
          border: "3px solid #F00",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <GiHamburgerMenu color='#F00' size={25} />
      </div>
    </RootNavbarStylesForCellularClosedAtTheBottom>
  );
}
