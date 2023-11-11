import { Typography, Box, styled } from "@mui/material";

export const RootFavoritesListItems = styled(Box)(({ theme }) => ({
  background: "#FFF",
  border: "2px solid #000",
  margin: "15px",
  padding: "20px",
  height: "600px",
  width: "350px",
}));

export const stylesImgMovie = {
  borderRadius: "25px 25px 0 0",
  height: "200px",
  width: "100%"
};

export const TypoTitleMovie = styled(Typography)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  textAlign: "center",
}));

