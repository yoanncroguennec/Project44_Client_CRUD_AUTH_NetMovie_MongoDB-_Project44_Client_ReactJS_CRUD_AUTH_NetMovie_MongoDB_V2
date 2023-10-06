import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  DialogContent,
  Slide,
  AccordionDetails,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
  Accordion,
  AccordionSummary,
  DialogActions,
} from "@mui/material";
// LAYOUTS
import { GlobalBtn } from "../";

// STYLES
import {
  RootDialog,
} from "./StylesWelcomePopupAnnouncingTheLatestfilmsAndSeries";
// ICONS
import { SlArrowDown } from "../../../utils/assets/icons";
import { Link } from "react-router-dom";

// EFFECT TRANSITION DISPLAY DIALOG
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} timeout={1500} />;
});

// EXPORT FUNCTION
export default function WelcomePopupAnnouncingTheLatestfilmsAndSeries() {
  // RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // STYLES
  const styleImgMovie = {
    border: "5px solid #000",
    borderRadius: "50%",
    height: `${matches ? "100px" : "130px"}`,
    marginRight: `${matches ? "10px" : "50px"}`,
    width: `${matches ? "100px" : "230px"}`,
  };

  // GET API Display Latest Movies In BDD
  const [displayLatestMoviesInBDD, setdisplayLatestMoviesInBDD] = useState([]);

  useEffect(() => {
    const getAllDisplayLatestMoviesInBDD = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/displayLatestMoviesInBDD`;
        const { data } = await axios.get(url);
        // console.log("displayLatestMoviesInBDD :", data.movies);
        setdisplayLatestMoviesInBDD(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllDisplayLatestMoviesInBDD();
  }, [displayLatestMoviesInBDD]);

  // STATE MODAL DIALOG
  const [open] = useState(true);

  // RETURN
  return (
    <RootDialog open={open} TransitionComponent={Transition} keepMounted>
      <DialogContent>
        <Typography
          align='center'
          sx={{
            fontFamily: "'Sacramento', cursive",
            color: "red",
            fontWeight: "600",
          }}
          variant='h4'
        >
          {"Derniers films & séries ajoutés sur Net Movie :"}
        </Typography>
        <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
          <AccordionSummary expandIcon={<SlArrowDown color='#000' size={35} />}>
            <div
              style={{
                background: "linear-gradient(135deg, #3C8CE7, #00EAFF)",
                borderRadius: "15px",
                padding: "10px",
                marginLeft: "115px",
                marginRight: "25px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant='h4'>
                01
              </Typography>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant='h5'>
                Derniers Films
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {displayLatestMoviesInBDD
              // sortByAlphabeticalOrder
              .sort((a, b) => a.name > b.name)
              .map(({ _id, name, img, actors }) => (
                <>
                  <Tooltip title={`Accèdez au film "${name}"`}>
                    <ListItem
                      button
                      // ATTENTION ! Laisser "component='a'", sinon le lien ne marche pas
                      component='a'
                      href={`movies/${_id}`}
                    >
                      <img src={img} alt={name} style={styleImgMovie} />
                      <ListItemText primary={name} secondary={actors} />
                    </ListItem>
                  </Tooltip>

                  <Divider />
                </>
              ))}
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
          <AccordionSummary expandIcon={<SlArrowDown color='#000' size={35} />}>
            <div
              style={{
                background: "linear-gradient(135deg, #70F570, #49C628)",
                borderRadius: "15px",
                padding: "10px",
                marginLeft: "115px",
                marginRight: "25px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant='h4'>
                02
              </Typography>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant='h5'>
                Dernières séries
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: "center" }} variant='h6'>
              Désolé, aucunes séries pour le moment. 😥
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DialogContent>
      <DialogActions
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
          <GlobalBtn
            urlBtn={"featured_SliderCategoryListMovies"}
            textBtn={"Accédez aux films"}
          />
      </DialogActions>
    </RootDialog>
  );
}
