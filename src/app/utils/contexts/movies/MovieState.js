import React, { useContext, useReducer } from "react";
import { MovieContext } from "./MovieContext";
import MovieReducer from "./MovieReducer";

export const useMovie = () => {
  const { state, dispatch } = useContext(MovieContext);
  return [state, dispatch];
};

export const MovieState = ({ children }) => {
  const initialState = {
    movie: {},
    loading: false,
    error: false,
    message: "",
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
