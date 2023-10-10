import { Box, styled, Typography } from "@mui/material";

export const BoxModalInfosMovie = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.9)",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  color: "#FFF",
  left: "50%",
  padding: "55px",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  [theme.breakpoints.down("sm")]: {
    padding: "0",
    width: 350,
  },
}));

export const TypoMovie = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
}));

export const BoxNoDescription = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: "25px",
}));

export const BoxThreeBtns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}));
