import { Box, Typography, styled } from "@mui/material";

export const Root_BooleanIfMovieViewed_Rating = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
}));

export const TypoRating = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginLeft: "20px",
}));
