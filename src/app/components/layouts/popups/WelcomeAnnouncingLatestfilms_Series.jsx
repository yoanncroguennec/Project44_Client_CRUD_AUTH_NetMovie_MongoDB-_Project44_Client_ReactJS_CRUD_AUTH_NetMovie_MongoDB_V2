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
import { GlobalBtns } from "..";

// STYLES
import { RootDialog } from "./StylesWelcomeAnnouncingLatestfilms_Series";
// ICONS
import { SlArrowDown } from "../../../utils/assets/icons";

// EFFECT TRANSITION DISPLAY DIALOG
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} timeout={1500} />;
});

// EXPORT FUNCTION
export default function WelcomeAnnouncingLatestfilms_Series() {
  // RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const sizeIconArrowDown = matches ? 25 : 35;
  const colorIconArrowDown = "#000";

  // STYLES
  const styleImgMovie = {
    border: `${matches ? "3px solid #000" : "5px solid #000"}`,
    borderRadius: "50%",
    height: `${matches ? "70px" : "130px"}`,
    marginLeft: `${matches ? "-30px" : ""}`,
    marginRight: `${matches ? "5px" : "50px"}`,
    width: `${matches ? "80px" : "230px"}`,
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
          sx={{
            textAlign: "center",
            fontFamily: "'Sacramento', cursive",
            color: "red",
            fontWeight: "600",
          }}
          variant={matches ? "h6" : "h3"}
        >
          Derniers films & séries {matches ? "" : "ajoutés sur Net Movie :"}
        </Typography>
        <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
          <AccordionSummary
            expandIcon={
              <SlArrowDown
                color={colorIconArrowDown}
                size={sizeIconArrowDown}
              />
            }
          >
            <div
              style={{
                background: "linear-gradient(135deg, #3C8CE7, #00EAFF)",
                borderRadius: "15px",
                padding: "10px",
                marginLeft: `${matches ? "" : "115px"}`,
                marginRight: `${matches ? "10px" : "25px"}`,
              }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                variant={matches ? "h6" : "h4"}
              >
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
              <Typography
                sx={{ fontWeight: "bold" }}
                variant={matches ? "h6" : "h5"}
              >
                Derniers Films
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails style={{ background: "blue", width: "870px" }}>
            {displayLatestMoviesInBDD
              // sortByAlphabeticalOrder
              // .sort((a, b) => a.name > b.name)
              .map(({ _id, name, img, actors }) => (
                <>
                  <Tooltip title={`Accèdez au film "${name}"`}>
                    <ListItem
                      button
                      // ATTENTION ! Laisser "component='a'", sinon le lien ne marche pas
                      component='a'
                      href={`movies/${_id}`}
                      style={{ background: "red" }}
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
          <AccordionSummary
            expandIcon={
              <SlArrowDown
                color={colorIconArrowDown}
                size={matches ? 25 : 35}
              />
            }
          >
            <div
              style={{
                background: "linear-gradient(135deg, #70F570, #49C628)",
                borderRadius: "15px",
                padding: "10px",
                marginLeft: `${matches ? "" : "115px"}`,
                marginRight: `${matches ? "10px" : "25px"}`,
              }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                variant={matches ? "h6" : "h4"}
              >
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
              <Typography
                sx={{ fontWeight: "bold" }}
                variant={matches ? "h6" : "h5"}
              >
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
        <GlobalBtns
          urlBtn={"featured_SliderCategoryListMovies"}
          textBtn={"Accédez aux films"}
        />
      </DialogActions>
    </RootDialog>
  );
}
