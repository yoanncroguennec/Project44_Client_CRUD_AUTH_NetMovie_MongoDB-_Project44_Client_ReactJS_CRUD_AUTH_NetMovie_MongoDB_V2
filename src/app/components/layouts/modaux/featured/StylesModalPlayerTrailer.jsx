import { Box, styled } from "@mui/material";

export const BoxModalPlayerTrailer = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.8)",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  color: "#FFF",
  left: "50%",
  height: 500,
  p: 4,
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  [theme.breakpoints.down("sm")]: {
    width: 350,
  },
}));
