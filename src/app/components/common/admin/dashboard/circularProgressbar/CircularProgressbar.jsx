// Lesson "styles font-weight in react-circular-progressbar" : "https://stackoverflow.com/questions/75654186/how-to-increase-font-weight-in-react-circular-progressbar"

import { Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useOutletContext } from "react-router-dom";

export default function DashBoard_CircularProgressbar() {
  const [allMovies, countAllMovies] = useOutletContext();

  const percentageTotalMovies = (countAllMovies * 100) / 1000;

  return (
    <div style={{ background: "rgba(255,255,255, 0.6)", border: "4px solid #000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", borderRadius: "50%",height: "350px" , width: "350px"}}>
      <div
        className='featuredChart'
        style={{ width: "200px", height: "200px" }}
      >
        <CircularProgressbar
          value={percentageTotalMovies}
          text={`${percentageTotalMovies}%/1000`}
          strokeWidth={5}
          background
          backgroundPadding={0}
          styles={buildStyles({
            textSize: "0.8rem",
            textShadow: "0 0 2px #000",
            backgroundColor: "#102558",
            textColor: "#fff",
            pathColor: "#F00",
            trailColor: "#00ade9",
            // transform: "rotate(90deg)",
            // transformOrigin: "center center",
            // rotation: 1 / 7 + 1 / 10,
            text: {},
          })}
        />
      </div>
      <Typography variant='h6'>
        <strong>Nombres de films :</strong>
        {allMovies.length}
      </Typography>
    </div>
  );
}
