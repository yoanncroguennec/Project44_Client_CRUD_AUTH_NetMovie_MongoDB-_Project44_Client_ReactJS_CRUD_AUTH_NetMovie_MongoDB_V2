import { Typography, Box, styled } from "@mui/material";

// export const BoxCategory = styled(Box)(({ theme }) => ({
//   alignItems: "center",
//   color: "#FFF",
//   display: "flex",
//   fontSize: "20px",
//   fontWeight: "500",
//   left: "50px",
//   position: "absolute",
//   top: "80px",
// }));


export const RootFeatured = styled(Box)(({ img }) => ({
  backgroundImage: `url("${img}")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  color: "#FFF",
  filter: "brightness(90%)",
  height: "100vh",
  width: "100vw",
}));

export const BoxFeatured = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
}));

export const Dropdown = styled(Box)(({ theme }) => ({
  background: "#000",
  border: "1px solid #FFF",
  height: "30px",
  margin: "100px auto",
  position: "relative",
  userSelect: "none",
  width: "200px",
  zIndex: "999",
}));

export const DropdownBtn = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  boxShadow: "3px 3px 10px 6px rgba(0, 0, 0, 0.06)",
  color: "#FFF",
  display: "flex",
  fontWeight: "bold",
  height: "15px",
  justifyContent: "space-between",
  padding: "15px 20px",
}));

export const BoxActiveDropdown = styled(Box)(({ theme }) => ({
  border: "1px dotted black",
  height: "350px",
  overflowY: "scroll",
  zIndex: 999,
}));

export const DropdownItem = styled(Box)(({ theme }) => ({
  background: "#000",
  cursor: "pointer",
  padding: "10px",
  transition: "all 0.2s",
  "&:hover": {
    background: "#333",
  },
}));


/***************************/
export const BoxBGTitleDescBtnsMovieRandom = styled(Typography)(({ matches }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "25px",
  marginLeft: `${matches ? "5px" : "45px"}`,
  padding: `${matches ? "25px" : "50px"}`,
  width: `${matches ? "350px" : "700px"}`,
}));

export const TypoNameMovieRandom = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
}));

export const BoxThreeBtns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}));

export const BoxIconBtn = styled(Box)(({ matches }) => ({
  marginRight: `${matches ? "5px" : "15px"}`,
}));

export const StylesThreeBtns = {
  alignItems: "center",
  border: "2px solid red",
  borderRadius: "25px",
  cursor: "pointer",
  color: "#FFF",
  display: "flex",
  flexWrap: "nowrap",
  padding: "4px 10px",
  width: "170px",
};
