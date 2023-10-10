import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
// import Loader from "react-loader-spinner";
// ICONS
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import PopupForForgottenPassword from "../../../components/layouts/popups/PopupForForgottenPassword";
import { LoaderSpinner } from "../../../components/utils";
const colorIcon = "#FFF";
const sizeIcon = 35;

export default function Login({ setUser, handleTokenAndId }) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [visiblePassword, setVisiblePassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post(
        `https://project44-reactjs-crud-auth-netmovie-mongodb-gss9o904v.vercel.app/api/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        if (response.data.token) {
          // handleTokenAndId(response.data.token);
          handleTokenAndId(response.data.token, response.data._id);
          setIsLoading(false);
          navigate("/featured_SliderCategoryListMovies");
        } else {
          alert("Une erreur est survenue, veuillez réssayer.");
        }
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  const EndAdorment = ({ visiblePassword, setVisiblePassword }) => {
    return (
      <InputAdornment position='end'>
        <IconButton onClick={() => setVisiblePassword(!visiblePassword)}>
          {visiblePassword ? (
            <FaRegEyeSlash color={colorIcon} size={sizeIcon} />
          ) : (
            <FaRegEye color={colorIcon} size={sizeIcon} />
          )}
        </IconButton>
      </InputAdornment>
    );
  };
  return (
    <>
      <div
        style={{
          background: "linear-gradient(45deg, #FC466B, #3F5EFB)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255, 255, 255, .3)",
              padding: "3rem",
              height: "450px",
              borderRadius: "20px",
              borderLeft: "1px solid rgba(255, 255, 255, .3)",
              borderTop: "1px solid rgba(255, 255, 255, .3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "20px 20px 40px -6px rgba(0, 0, 0, .2)",
              textAlign: "center",
              width: `${matches ? "400px" : "500px"}`,
            }}
          >
            {/* <h4>TEST : yoann.croguennec@gmail.com</h4> */}
            <Typography
              style={{
                color: "#FFF",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
              variant='h4'
            >
              Se connecter
            </Typography>

            {/*********** EMAIL ***********/}
            <TextField
              label='Email'
              type='email'
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MdOutlineMail color={colorIcon} size={sizeIcon} />
                  </InputAdornment>
                ),
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "Transparent",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "Transparent",
                    },
                  },
                },
              }}
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorMessage("");
              }}
              style={{ marginBottom: "15px" }}
              variant='outlined'
              // fullWidth
              value={email}
            />

            {/*********** PASSWORD ***********/}
            <TextField
              label='Mot de passe'
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              sx={{
                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    <InputAdornment position='start'>
                      <RiLockPasswordLine color={colorIcon} size={sizeIcon} />
                    </InputAdornment>
                  </>
                ),
                endAdornment: (
                  <EndAdorment
                    visiblePassword={visiblePassword}
                    setVisiblePassword={setVisiblePassword}
                  />
                ),
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "Transparent",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "Transparent",
                    },
                  },
                },
              }}
              style={{ marginBottom: "15px" }}
              type={visiblePassword ? "text" : "password"}
              variant='outlined'
              // fullWidth
              value={password}
            />

            <Typography
              color='error'
              sx={{ fontWeight: "bold", marginBottom: "15px" }}
              variant='body2'
            >
              {errorMessage}
            </Typography>
            {isLoading ? (
              <LoaderSpinner />
            ) : (
              <button
                disabled={isLoading ? true : false}
                style={{
                  background: "transparent",
                  border: "none",
                  borderLeft: "1px solid rgba(255, 255, 255, .3)",
                  borderTop: "1px solid rgba(255, 255, 255, .3)",
                  padding: "1rem",
                  borderRadius: "50px",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  // -moz-backdrop-filter: "blur(5px)",
                  boxShadow: "4px 4px 60px rgba(0, 0, 0, .2)",
                  color: "white",
                  fontWeight: "500",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, .2)",
                  transition: "all .3s",
                  marginBottom: "2em",
                }}
                type='submit'
              >
                Se connecter
              </button>
            )}
            <br />
            <PopupForForgottenPassword />
          </form>
        </div>
      </div>
    </>
  );
}
