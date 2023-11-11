import { Box, Typography, styled } from "@mui/material";

export const TypoTitlePage = styled(Typography)(({ theme }) => ({
  marginTop: "150px",
  textAlign: "center",
}));

export const BoxListMovies = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  margin: "85px 0",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
}));

export const styleLink = {
  color: "#000",
  cursor: "pointer",
  textDecoration: "none",
};

export const RootListMovies = styled(Box)(({ theme }) => ({
  background: "#f1f1f1",
  borderRadius: "10px",
  boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
  margin: "0 auto",
  marginBottom: "45px",
  maxWidth: "600px",
  padding: "30px",
  width: "100%",
  "&::after": {
    content: "''",
    clear: "both",
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

export const TypoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
}));

export const BoxNoDescription = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: "25px",
}));
