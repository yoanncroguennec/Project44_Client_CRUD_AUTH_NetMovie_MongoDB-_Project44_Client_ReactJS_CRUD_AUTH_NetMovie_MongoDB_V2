import { Typography, styled } from "@mui/material";

export const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  height: "350px",
  minWidth: "480px",
  overflowX: "hidden",
  position: "relative",
  textDecoration: "none",
  zIndex: 99,
};

export const styleImg = {
  height: "100%",
  width: "100%",
  zIndex: 1,
  position: "absolute",
};

export const TypoTitleOfMovie = styled(Typography)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 3,
  position: "absolute",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));
