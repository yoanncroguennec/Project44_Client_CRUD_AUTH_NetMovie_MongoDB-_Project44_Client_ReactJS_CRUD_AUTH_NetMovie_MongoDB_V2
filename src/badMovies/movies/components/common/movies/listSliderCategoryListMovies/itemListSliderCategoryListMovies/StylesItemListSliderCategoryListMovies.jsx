import { Typography, Container, styled, Box } from "@mui/material";

export const RootItemListSliderCategoryListMovies = styled(Container)(({ theme }) => ({
  gridColumnEnd: 2,
  gridColumnStart: 1,
  gridRowEnd: 2,
  gridRowStart: 1,
  position: "relative",
  textAlgin: "center",
  [theme.breakpoints.down("sm")]: {},
}));

export const NameMovieItem = styled(Typography)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.3)",
  fontWeight: "bold",
  position: "absolute",
  top: "0px",
  color: "#FFF",
  height: "30px",
  textAlign: "center",
  width: "100%",
}));


