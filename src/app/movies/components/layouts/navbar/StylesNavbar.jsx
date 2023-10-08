import { Box, styled } from "@mui/material";

export const RootNavbar = styled(Box)(({ isScrolled, matches }) => ({
  alignItems: "center",
  background: `${
    isScrolled ? "rgba(255,255,255, 0.2)" : "rgba(51, 51, 51, 0.6)"
  }`,
  color: "#FFF",
  display: "flex",
  height: `${matches ? "40px" : "70px"}`,
  justifyContent: "space-between",
  padding: "20px",
  position: "fixed",
  top: "0",
  width: "100vw",
  zIndex: "99",
}));

export const Typo_FirstLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "27px" : "35px"}`,
  fontWeight: "bold",
}));

export const Typo_SecondLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "23px" : "31px"}`,
  fontWeight: "bold",
}));

export const Typo_ThirdLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "19px" : "27px"}`,
  fontWeight: "bold",
}));

export const Typo_FourthLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "15px" : "23px"}`,
  fontWeight: "bold",
}));

export const Typo_FifthLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "15px" : "23px"}`,
  fontWeight: "bold",
}));

export const Typo_SixthLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontWeight: "bold",
  fontSize: `${matches ? "19px" : "27px"}`,
  fontWeight: "bold",
}));

export const Typo_SeventhLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "23px" : "31px"}`,
  fontWeight: "bold",
}));

export const Typo_EighthLetter_Logo = styled(Box)(({ matches }) => ({
  color: "#F00",
  fontSize: `${matches ? "27px" : "35px"}`,
  fontWeight: "bold",
}));

// export const Typo_NinthLetter_Logo = styled(Box)(({ matches }) => ({
//   color: "#F00",
//   fontWeight: "bold",
//   fontSize: `${matches ? "30px" : "35px"}`,
// }));
