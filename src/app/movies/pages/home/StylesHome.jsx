import { Typography, Box, styled } from "@mui/material";

export const RootHome = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  overflow: "hidden",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxNetflix = styled(Box)(({ theme }) => ({
  height: "520px",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "360px",
}));

export const ThreeBoxNetflixSpan = styled(Box)(({ theme }) => ({
  background: "#DB0001",
  height: "0",
  position: "absolute",
  width: "100px",
}));

export const TypoTitleHome = styled(Typography)(({ theme }) => ({
  bottom: "-155px",
  color: "#FFF",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "80px",
  letterSpacing: "10px",
  margin: "0",
  padding: "0",
  position: "relative",
  textAlign: "center",
  textTransform: "uppercase",
  "&::before": {
    animation: "animate 5s linear forwards",
    background: "linear-gradient(to right, transparent, #000, #000)",
    content: "''",
    height: "100%",
    position: "absolute",
    right: "0",
    top: "0",
    width: "300%",
    zIndex: "1",
    "@keyframes animate": {
      "0%": {
        right: "0",
      },
      "100%": {
        right: "-250%",
      },
    },
  },
}));
