import { Box, styled } from "@mui/material";

export const RootNavbarForCellularTheBottom = styled(Box)(({ matches }) => ({
  height: `${matches && "10vh"}`,
  background: "#000",
  border: "2px solid #F00",
  position: "absolute",
  color: "#FFF",
  bottom: 0,
  borderBottom: "none",
  borderTopLeftRadius: "35px",
  borderTopRightRadius: "35px",
  margin: "0 15px",
  width: "90%",
}));

export const BoxListItemsNavbarForCellularTheBottom = styled(Box)(
  ({ matches }) => ({
    background: "",
    listStyleType: "none",
    top: "-15px",
    display: "flex",
    position: "absolute",
    // position: "relative",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 15px",
    zIndex: "0",
  })
);

export const CircleIndicatingTheSelectedItem = styled(Box)(
  ({ dataExtendNavbarCellular, activeItem }) => ({
    transform: `${dataExtendNavbarCellular[activeItem].dis}`,
    background: "#FFF",
    border: "2px solid #F00",
    transitionDuration: "500ms",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    position: "absolute",
    top: "-6px",
    zIndex: "-12",
  })
);

export const BoxItemNavbarForCellularTheBottom = styled(Box)(({  }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingTop: "24px",
}));

//////////////// STYLES EFFECT ACTIVE / NO ACTIVE ITEM
export const EffectActiveIcon = styled(Box)(({}) => ({
  cursor: "pointer",
  transitionDuration: "500ms",
  marginTop: "-24px",
}));

export const EffectActiveText = styled(Box)(({}) => ({
  transform: "translateY(1rem)",
  transitionDuration: "700ms",
  opacity: 1,
  position: "absolute",
  zIndex: "999",
}));

export const EffectNoActiveIcon = styled(Box)(({}) => ({
  cursor: "pointer",
}));

export const EffectNoActiveText = styled(Box)(({}) => ({
  opacity: 0,
  transform: "translateY(0.2rem)",
}));
