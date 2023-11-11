import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Cookies from "js-cookie";
// LAYOUTS
import {
  AppLayout,
  Movie_ID_Layout,
  Admin_Layout,
  WelcomeAnnouncingLatestfilms_Series,
} from "../components/layouts";
// PAGES
import {
  // Page_Featured_And_SliderCategoryListMovies,
  Home,
  // MOVIES
  ListAllMovies,
  ListMovieByCategory,
  Movie_By_ID,
  Page_Featured_And_SliderCategoryListMovies,
  // FAVORITES
  ListFarorites_WithoutMongodb_WithLocalStorage,
  // AUTH
  Login,
  MyProfile,
  // ADMIN
  Dashboard,
  NewUser,
  Admin_ListUsers,
  UserLocation_And_IP_Address,
  Admin_CategoryListMovie,
  Admin_NewCategoryListMovie,
  Admin_ListMovies,
  Admin_NewMovie,
  StaticsWithLineChartJs,
  StaticsWithBarChartJs,
  Admin_UpdateMovie,
} from "../pages";

// EXPORT FUNCTION
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
        {
          path: "movies/listMovieByCategory",
          element: <ListMovieByCategory />,
        },
        {
          path: "movies/listFarorites_WithoutMongodb_WithLocalStorage",
          element: <ListFarorites_WithoutMongodb_WithLocalStorage />,
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
    /////////////////////////////////////////////////////////////////////////
    ////////////////////////////// MOVIE BY ID //////////////////////////////
    /////////////////////////////////////////////////////////////////////////
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
    ///////////////////////////////// ADMIN /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    {
      element: <Admin_Layout />,
      children: [
        // ADMIN -DASHBOARD
        {
          path: "admin/dashboard",
          element: <Dashboard />,
        },
        // ADMIN - USERS
        {
          path: "admin/listUsers",
          element: <Admin_ListUsers />,
        },
        {
          path: "admin/newUser",
          element: <NewUser />,
        },
        {
          path: "admin/userLocation_And_IP_Address",
          element: <UserLocation_And_IP_Address />,
        },
        // ADMIN - MOVIES
        {
          path: "admin/admin_ListMovies",
          element: <Admin_ListMovies />,
        },
        {
          path: "admin/newMovie",
          element: <Admin_NewMovie />,
        },
        {
          path: "admin/updateMovie/:id",
          element: <Admin_UpdateMovie />,
        },
        // ADMIN - CATEGORIES
        {
          path: "admin/admin_CategoriesListMovies",
          element: <Admin_CategoryListMovie />,
        },
        {
          path: "admin/admin_NewCategoryListMovie",
          element: <Admin_NewCategoryListMovie />,
        },
        // ADMIN - STATICS
        {
          path: "admin/line_ChartJs/statics_movies_and_listcategoryMovies",
          element: <StaticsWithLineChartJs />,
        },
        {
          path: "admin/bar_ChartJs/statics_movies_and_listcategoryMovies",
          element: <StaticsWithBarChartJs />,
        },
      ],
    },
  ]);

  return element;
}
