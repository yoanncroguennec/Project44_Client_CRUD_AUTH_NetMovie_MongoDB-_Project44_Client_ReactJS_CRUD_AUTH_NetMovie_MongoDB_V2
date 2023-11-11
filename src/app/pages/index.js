import Home from "./home/Home";
// MOVIES
import ListAllMovies from "./movies/listAllMovies/ListAllMovies";
import ListMovieByCategory from "./movies/listMovieByCategories/ListMovieByCategory";
import Movie_By_ID from "./movies/movie/Movie_By_ID";
import Page_Featured_And_SliderCategoryListMovies from "./movies/page_Featured_And_SliderCategoryListMovies/Page_Featured_And_SliderCategoryListMovies";
// FAVORITES
import ListFarorites_WithoutMongodb_WithLocalStorage from "./movies/favorites/ListFarorites_WithoutMongodb_WithLocalStorage";
// AUTH
import Login from "./auth/login/Login";
import MyProfile from "./auth/myProfile/MyProfile";
// ADMIN - DASHBOARD
import Dashboard from "./admin/dashboard/Dashboard";
// ADMIN - USERS
import NewUser from "./admin/users/newUser/NewUser";
import UserLocation_And_IP_Address from "./admin/users/userLocation_And_IP_Address/UserLocation_And_IP_Address";
import Admin_ListUsers from "./admin/users/listUsers/Admin_ListUsers";
// ADMIN - MOVIES
import Admin_ListMovies from "./admin/movies/listMovies/Admin_ListMovies";
import Admin_NewMovie from "./admin/movies/newMovie/Admin_NewMovie";
import Admin_UpdateMovie from "./admin/movies/updateMovie/Admin_UpdateMovie";
// ADMIN - CATEGORIES
import Admin_CategoryListMovie from "./admin/movies/categories/listCategories/Admin_CategoryListMovie";
import Admin_NewCategoryListMovie from "./admin/movies/categories/newCategory/Admin_NewCategoryListMovie";
// ADMIN - STATICS
import StaticsWithLineChartJs from "./admin/static/lineChartJs/StaticsWithLineChartJs";
import StaticsWithBarChartJs from "./admin/static/barChartJs/StaticsWithBarChartJs";


export {
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
  // ADMIN -DASHBOARD
  Dashboard,
  // ADMIN - USERS
  NewUser,
  Admin_ListUsers,
  UserLocation_And_IP_Address,
  // ADMIN - MOVIES
  Admin_ListMovies,
  Admin_NewMovie,
  Admin_UpdateMovie,
  // ADMIN - CATEGORIES
  Admin_CategoryListMovie,
  Admin_NewCategoryListMovie,
  // ADMIN - STATICS
  StaticsWithLineChartJs,
  StaticsWithBarChartJs,
};
