import { Box, styled } from "@mui/material";

//////////////// STYLES NAVBAR BOTTOM
export const RootNavbarStylesForCellularClosedAtTheBottom = styled(Box)(
  ({ matches }) => ({
    // top: "5px",
    bottom: 0,
    background: "",
    height: `${matches && "5vh"}`,
    overflow: "hidden",
    position: "absolute",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  })
);

export const RootNavbarStylesForCellularOpenAtTheBottom = styled(Box)(
  ({ matches }) => ({
    bottom: 0,
    background: "",
    height: `${matches && "45vh"}`,
    overflow: "hidden",
    position: "absolute",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  })
);

//////////////// STYLES
export const BoxManagementBtnOpenCloseMenuCircle = styled(Box)(({}) => ({
  background: "",
  position: "absolute",
  zIndex: "55",
  height: "54px",
  width: "55px",
  top: "100px",
}));

//////////////// STYLES BTN CLOSE/OPEN MENU CIRCLE
export const BoxBtbnCloseMenuCircle = styled(Box)(({}) => ({
  alignItems: "center",
  background: "#FFF",
  border: "2px solid #F00",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  borderRadius: "50%",
  width: "100%",
}));

export const BoxBtnOpenCloseMenuCircle = styled(Box)(({ matches }) => ({
  alignItems: "center",
  background: "#FFF",
  border: "2px solid #F00",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  width: "100%",
  zIndex: "9",
}));

//////////////// STYLES BOX ITEMS AROUND THE CIRCLE
export const BoxItemsAroundTheCircle = styled(Box)(
  ({ bgRounded, openBtnMoreCircleMenu, effectTransitionDelay, rotation }) => ({
    alignItems: "center",
    backgroundImage: `url("${bgRounded}")`,
    backgroundSize: "cover",
    opacity: "0.9",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    left: 0,
    height: "100%",
    position: "absolute",
    top: 0,
    transition: "transform 500ms ease",
    transitionDelay: `${openBtnMoreCircleMenu ? effectTransitionDelay : 0} ms`,
    transform: `rotate(${rotation}deg) translate(${
      openBtnMoreCircleMenu ? 175 : 0
    }%)`,
    width: "100%",
    zIndex: "-1",
  })
);

export const BoxIconItem = styled(Box)(({ rotation }) => ({
  transform: `rotate(${-rotation}deg)`,
}));

export const stylesIcon = {
  height: "35px",
  width: "35px",
};
