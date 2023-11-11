import { Typography, Box, styled } from "@mui/material";

export const RootHome = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.7)",
  marginRight: "150px",
  width: "70%",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: "25px",
  padding: "25px",
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxForm = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "100%",
}));

export const TypoBold = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontWeight: "bold",
}));

export const BoxForm2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40%",
}));


