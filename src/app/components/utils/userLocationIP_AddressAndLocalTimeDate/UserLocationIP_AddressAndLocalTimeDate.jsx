import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import "moment/locale/fr";
import { FormatLocalTime } from "../../../utils/functions";
var now = moment();

export default function UserLocationIP_AddressAndLocalTimeDate({
  id_Of_ConnectedUser,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [
    dataInformationLocationConnectedUser,
    setDataInformationLocationConnectedUser,
  ] = useState({});

  const [ipv4, setIPV4] = useState([]);

  // DATE
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const getIP_And_Location = async () => {
      try {
        const url = `https://geolocation-db.com/json/%204aebddc0-500e-11ee-9b7d-f1b795d54ff5`;
        const { data } = await axios.get(url);
        // console.log("IP_And_Location :", data);
        setDataInformationLocationConnectedUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    getIP_And_Location();

    const getIPV4 = async () => {
      try {
        const url = `https://api.ipify.org`;
        const { data } = await axios.get(url);
        // console.log("ipv4 :", data);
        setIPV4(data);
      } catch (err) {
        console.log(err);
      }
    };

    getIPV4();

    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        color: "#FFF",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        WebkitTextStroke: "0.5px #000",
      }}
    >
      {/* A REVOIR LOCATION CAR MARCHE UNE FOIS SUR DEUX */}
      {/* <Typography sx={{ fontWeight: "bold" }} variant='body1'>
        {`${dataInformationLocationConnectedUser.country_name} (${dataInformationLocationConnectedUser.country_code})`}
      </Typography> */}
      {/* <Typography sx={{ fontWeight: "bold" }} variant='body1'>
        IPV4 : {dataInformationLocationConnectedUser.IPv4} / {ipv4}
      </Typography> */}

      <Typography
        sx={{ fontWeight: "bold" }}
        variant={matches ? "body2" : "h6"}
      >
        {/* CONDITION RESPONSIVE DATE */}
        {matches
          ? `${moment(now).format("L")}`
          : `${moment(now).format("dddd DD MMMM YYYY")}`}
        {/* SUITE DU CODE APRES LA SORTIE DE LA CONDITION DATE */}/{" "}
        {FormatLocalTime(currentDate)}
      </Typography>
      {/* <Typography sx={{ fontWeight: "bold" }} variant='body1'>
        {id_Of_ConnectedUser}
      </Typography> */}
    </div>
  );
}
