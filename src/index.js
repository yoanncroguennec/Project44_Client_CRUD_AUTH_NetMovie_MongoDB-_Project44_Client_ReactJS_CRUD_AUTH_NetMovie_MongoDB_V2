import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/routes/AppRoutes";
// REACT-CUSTOM-ALERT
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieState } from "./app/utils/contexts/movies/MovieState";
import AppContextProvider from "./app/utils/contexts/favouritesMovie/FavouritesMovie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <MovieState>
        <Router />
        <ToastContainer />
      </MovieState>
    </AppContextProvider>
  </BrowserRouter>
);
