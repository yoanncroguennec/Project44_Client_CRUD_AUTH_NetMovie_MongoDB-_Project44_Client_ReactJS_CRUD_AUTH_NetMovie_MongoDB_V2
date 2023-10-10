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
  Login,
  MyProfile,
} from "../movies/pages";
// Layouts
import {
  AppLayout,
  Movie_ID_Layout,
  WelcomeAnnouncingLatestfilms_Series,
} from "../movies/components/layouts";
import Paint from "../othersApplications/paint/Paint";
import Global_OthersApplications_layouts from "../othersApplications/global_OthersApplications_layouts/Global_OthersApplications_layouts";
import BreakOut from "../games/breakOut/BreakOut";
import IndexGlobalApp from "../othersApplications/IndexGlobalApp";
import Generate_QR_Code from "../othersApplications/generate_QR_Code/Generate_QR_Code";

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
    //////////////////////////////////////////////////////////
    ////////////////////////// USER //////////////////////////
    //////////////////////////////////////////////////////////
    {
      element: (
        <AppLayout
          handleTokenAndId={handleTokenAndId}
          token={token}
          id_Of_ConnectedUser={id_Of_ConnectedUser}
        />
      ),
      children: [
        /// MOVIES
        {
          path: "/featured_SliderCategoryListMovies",
          element: <Page_Featured_And_SliderCategoryListMovies />,
        },
        {
          path: "movies/listAllMovies",
          element: <ListAllMovies />,
        },
        /// AUTH
        {
          path: "auth/login",
          element: <Login handleTokenAndId={handleTokenAndId} />,
        },
        {
          path: "auth/myProfile",
          element: (
            <MyProfile
              token={token}
              id_Of_ConnectedUser={id_Of_ConnectedUser}
              handleTokenAndId={handleTokenAndId}
            />
          ),
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
    /////////////////////////////////////////////////////////////////////////
    ////////////////////////// OTHERS APPLICATIONS //////////////////////////
    /////////////////////////////////////////////////////////////////////////
    {
      element: <Global_OthersApplications_layouts />,
      children: [
        {
          path: "othersApplications/home",
          element: <IndexGlobalApp />,
        },
        {
          path: "othersApplications/paint",
          element: <Paint />,
        },
        {
          path: "othersApplications/generate_QR_Code",
          element: <Generate_QR_Code />,
        },
        // {
        //   path: "othersApplications/",
        //   element: <BreakOut />,
        // },
        // {
        //   path: "othersApplications/",
        //   element: <BreakOut />,
        // },
        // {
        //   path: "othersApplications/",
        //   element: <BreakOut />,
        // },
      ],
    },
    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////// GAMES ///////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    {
      element: <Global_OthersApplications_layouts />,
      children: [
        {
          path: "games/breakOut",
          element: <BreakOut />,
        },
      ],
    },
  ]);

  return element;
}
