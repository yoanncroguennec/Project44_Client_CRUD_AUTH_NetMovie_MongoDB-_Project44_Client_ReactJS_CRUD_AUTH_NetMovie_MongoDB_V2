export const RootSlide_BG_Mobie = styled(Box)(({ theme }) => ({
  height: "100vh",
  // overflow: "hidden",
  width: "100vw",
  "&::before, &::after": {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    content: "''",
    height: "100%",
    position: "absolute",
    width: "15%",
    // zIndex: "2",
  },
  "&::before": {
    left: "0",
    top: "0",
  },
  "&::after": {
    right: "0",
    top: "0",
    transform: "rotateZ(180deg)",
  },
}));