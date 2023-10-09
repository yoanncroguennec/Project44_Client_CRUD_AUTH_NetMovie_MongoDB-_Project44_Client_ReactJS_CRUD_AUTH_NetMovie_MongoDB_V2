import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Cookies from "js-cookie";
// PAGES
import {
  // Page_Featured_And_SliderCategoryListMovies,
  Home,
  ListAllMovies,
  Page_Featured_And_SliderCategoryListMovies,
  Movie_By_ID,
} from "../movies/pages";
// Layouts
import {
  AppLayout,
  Movie_ID_Layout,
  WelcomeAnnouncingLatestfilms_Series,
} from "../movies/components/layouts";

export default function Router() {
  ///////// COOKIES
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [id_Of_ConnectedUser, setId_Of_ConnectedUser] = useState(
    Cookies.get("yourIdUser") || null
  );
  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleTokenAndId = (token, id) => {
    if (token && id) {
      setToken(token);
      setId_Of_ConnectedUser(id);
      // setAdminOfConnectedUser(admin);
      Cookies.set("token", token, { expires: 14 });
      Cookies.set("yourIdUser", id, { expires: 14 });
      // Cookies.set("admin", admin, { expires: 14 });
    } else {
      setToken(null);
      setId_Of_ConnectedUser(null);
      // setAdminOfConnectedUser(null);
      Cookies.remove("token");
      Cookies.remove("yourIdUser");
      // Cookies.remove("sex");
    }
  };

  ///////// ROUTES
  let element = useRoutes([
    //////////////////////////////////////////////////////////
    //////////////////////// HOME PAGE ///////////////////////
    //////////////////////////////////////////////////////////
    {
      element: <Home />,
      children: [
        {
          path: "/",
          element: <WelcomeAnnouncingLatestfilms_Series />,
        },
      ],
    },
    {
      element: (
        <AppLayout
          handleTokenAndId={handleTokenAndId}
          token={token}
          id_Of_ConnectedUser={id_Of_ConnectedUser}
        />
      ),
      children: [
        //////////////////////////////////////////////////////////
        ////////////////////////// USER //////////////////////////
        //////////////////////////////////////////////////////////
        {
          path: "/featured_SliderCategoryListMovies",
          element: <Page_Featured_And_SliderCategoryListMovies />,
        },
        {
          path: "movies/listAllMovies",
          element: <ListAllMovies />,
        },
      ],
    },
    {
      element: <Movie_ID_Layout />,
      children: [
        {
          path: "movies/:id",
          element: (
            <Movie_By_ID
              token={token}
              id_Of_ConnectedUser={id_Of_ConnectedUser}
            />
          ),
        },
      ],
    },
  ]);

  return element;
}
