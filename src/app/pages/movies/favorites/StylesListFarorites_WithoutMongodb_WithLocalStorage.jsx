import { Typography, Box, styled } from "@mui/material";

export const RootListFarorites_WithoutMongodb_WithLocalStorage = styled(Box)(
  ({ theme }) => ({
    background: "#FFF",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "10vh",
  })
);

// SCROLLING TEXT
export const RootScrollingText = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  height: "70px",
  width: "1000px",
}));

export const stylesLottieExclamation = {
  height: "70px",
  width: "400px",
};

export const BoxContentScrollingText = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  overflow: "hidden",
}));

export const ContentScrollingText = styled(Box)(({ theme }) => ({
  animation: "rightToLeft 20s infinite linear",
  display: "flex",
  gap: "2em",
  margin: "0 2em",
  whiteSpace: "nowrap",
  "@keyframes rightToLeft": {
    from: {
      transform: "translateX(0%)",
    },
    to: {
      transform: "translateX(-50%)",
    },
  },
}));

export const TypoBold = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
}));

// ANIMATION HAND POINTING DOWN
export const BoxAnimationHandPointingDown = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  height: "150px",
  width: "350px",
}));

// LIST FAVORITES
export const RootListFavorites = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const TypoEmptyFavouritesList = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: "50px",
}));

// LIST FAVORITES
export const Box_Title_ListFavorites = styled(Box)(({ theme }) => ({
  // alignItems: "center",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
}));

export const BoxListFavorites = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

