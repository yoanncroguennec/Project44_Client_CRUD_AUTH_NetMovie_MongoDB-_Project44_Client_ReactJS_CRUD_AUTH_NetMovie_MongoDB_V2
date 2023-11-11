import {
  AiOutlineUser,
  ImFilm,
  MdOutlineHome,
  MdHomeFilled,
  MdFavoriteBorder,
  MdFavorite,
  MdHelpOutline,
  MdHelp,
} from "../../../../icons";
const sizeIcon = 30;
const colorIcon = "blue";
const colorIconFavorite = "#F9429E";

const dataBtnMoreEffectOpeningCircleMenu = [
  {
    text: "Plus de films",
    BtnCircle: "#3E84E6",
  },
  {
    text: "Pus d'applications",
    BtnCircle: "#15AB88",
  },
  {
    text: "Webradios",
    BtnCircle: "#EB5089",
  },
  {
    text: "Mon profil",
    BtnCircle: "#AFD91A",
  },
  {
    text: "Contact",
    BtnCircle: "#F27127",
  },
];

export const dataExtendNavbarCellular = [
  {
    id: 1,
    nameTooltip: "",
    url: "",
    icon: <MdOutlineHome color={colorIcon} size={sizeIcon} />,
    selectIcon: <MdHomeFilled color={colorIcon} size={sizeIcon} />,
    nameItem: "Accueil",
    dis: "translateX(-5px)",
  },
  {
    id: 2,
    nameTooltip: "",
    url: "auth/login",
    icon: <AiOutlineUser color={colorIcon} size={sizeIcon} />,
    selectIcon: <AiOutlineUser color={colorIcon} size={sizeIcon} />,
    nameItem: "Se connecter",
    dis: "translateX(7.3rem)",
  },
  {
    id: 3,
    nameTooltip: "",
    url: "",
    icon: <MdFavoriteBorder color={colorIconFavorite} size={sizeIcon} />,
    selectIcon: <MdFavorite color={colorIconFavorite} size={sizeIcon} />,
    nameItem: "Favoris",
    dis: "translateX(3.4rem)",
  },
  {
    id: 4,
    nameTooltip: "",
    url: "",
    icon: <MdHelpOutline color={colorIcon} size={sizeIcon} />,
    nameItem: "Contact",
    dis: "translateX(11.4rem)",
  },
];
