import { Box, styled, Typography } from "@mui/material";
import {
  imgBG_Admin1,
  imgBG_Admin2,
  imgBG_Admin3,
  imgBG_Admin4,
  imgBG_Admin5,
  imgBG_Admin6,
  imgBG_Admin7,
  imgBG_Admin8,
  imgBG_Admin9,
  imgBG_Admin10,
  // imgBG_Admin11,
  // imgBG_Admin12,
} from "../../utils/assets/imgs";

export const RootAdminOutlet = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  padding: "50px",
  //   width: "100vw",
  //   height: "100vh",
  //   overflow: "hidden",
  //   position: "relative",
  backgroundImage: `url(${imgBG_Admin1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
  justifyContent: "center",
  animation: `change 125s infinite ease-in-out`,
  "@keyframes change": {
    "0%": {
      backgroundImage: `url(${imgBG_Admin1})`,
    },
    "10%": {
      backgroundImage: `url(${imgBG_Admin2})`,
    },
    "20%": {
      backgroundImage: `url(${imgBG_Admin3})`,
    },
    "30%": {
      backgroundImage: `url(${imgBG_Admin4})`,
    },
    "40%": {
      backgroundImage: `url(${imgBG_Admin5})`,
    },
    "50%": {
      backgroundImage: `url(${imgBG_Admin6})`,
    },
    "60%": {
      backgroundImage: `url(${imgBG_Admin7})`,
    },
    "70%": {
      backgroundImage: `url(${imgBG_Admin8})`,
    },
    "80%": {
      backgroundImage: `url(${imgBG_Admin9})`,
    },
    "90%": {
      backgroundImage: `url(${imgBG_Admin10})`,
    },
    "100%": {
      backgroundImage: `url(${imgBG_Admin1})`,
    },
  },
  [theme.breakpoints.down("sm")]: {},
}));
