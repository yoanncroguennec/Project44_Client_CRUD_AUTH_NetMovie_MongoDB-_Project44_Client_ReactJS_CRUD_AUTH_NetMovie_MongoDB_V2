import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message },
  });

// Set movie (get movie info)
export const getMovie = async (dispatch) => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get(`https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies`)
    .then((res) => {
      const result = res.data;

      // set movie info
      dispatch({
        type: "SET_MOVIE",
        payload: result,
      });
    })
    .catch((error) => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result,
        },
      });
    });
};
