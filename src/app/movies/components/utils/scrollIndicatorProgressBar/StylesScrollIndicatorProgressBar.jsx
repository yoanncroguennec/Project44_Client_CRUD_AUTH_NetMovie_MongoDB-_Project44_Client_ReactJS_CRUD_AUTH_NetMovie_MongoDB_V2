import { Box, styled } from "@mui/material";

export const BlackBarStyles = styled(Box)(({ completion }) => ({
  transform: `translateX(${completion - 100}%)`,
  position: "fixed",
  background: "red",
  height: "20px",
  borderRadius: "25px",
  marginTop: "70px",
  width: "100vw",
  zIndex: 9,
}));

export const RedBarStyles = styled(Box)(({ completion }) => ({
  transform: `translateX(${completion - 100}%)`,
  position: "fixed",
  background: "#000",
  height: "7px",
  marginTop: "77px",
  borderRadius: "25px",
  width: "100vw",
  zIndex: 999,
}));

