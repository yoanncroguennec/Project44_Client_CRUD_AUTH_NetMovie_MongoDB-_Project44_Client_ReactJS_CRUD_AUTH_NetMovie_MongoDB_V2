import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiTwotoneFileExclamation } from "react-icons/ai";

export const admin_dataDrawerNavAdmin = [
  {
    path: "admin/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Utilisateurs",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "admin/listUsers",
        name: "Liste Utilisateurs ",
        icon: <FaUser />,
      },
      {
        path: "admin/newUser",
        name: "Nouvel utilisateur",
        icon: <FaUser />,
      },
      {
        path: "admin/userLocation_And_IP_Address",
        name: "Localisation users avec adresse IP",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/file-manager",
    name: "Films / Catégories",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "admin/Admin_ListMovies",
        name: "Liste films ",
        icon: <FaUser />,
      },
      {
        path: "admin/newMovie",
        name: "Nouveau film",
        icon: <FaLock />,
      },
      {
        path: "admin/admin_CategoriesListMovies",
        name: "Liste Catégories de films",
        icon: <FaMoneyBill />,
      },
      {
        path: "admin/admin_NewCategoryListMovie",
        name: "Nouvelle Catégorie de films",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "",
    name: "Statistiques",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "admin/line_ChartJs/statics_movies_and_listcategoryMovies",
        name: "Line - Films / catégories de films",
        icon: <FaUser />,
      },
      {
        path: "admin/bar_ChartJs/statics_movies_and_listcategoryMovies",
        name: "Barres - Films / catégories de films",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
];
