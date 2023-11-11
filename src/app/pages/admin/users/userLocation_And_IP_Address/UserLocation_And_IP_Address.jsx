import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
  Popup,
} from "react-map-gl";
import { Box, Typography } from "@mui/material";
import { BsFillPinAngleFill } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
const colorIcon_Icon_Admin = "#008000";
const colorIcon_Icon_User = "#F00";
const colorIcon_Icon_LocationOfTheLoggedInUser = "#0000FF";
const sizeIcon = 55;
const sizeIcon_LocationOfTheLoggedInUser = 75;

const searchResults = [
  {
    ipAddress: "169.254.45.110",
    firstName: "Bernard",
    lastName: "Croguennec",
    email: "bern.croguennec@orange.fr",
    address: "9 rue Emile Daubé",
    postalCode: 22000,
    city: "Saint-Brieuc",
    state: "France",
    phone: "0649574141",
    lat: 48.5166728,
    long: -2.7952263,
    admin: true,
  },
  {
    ipAddress: "169.254.76.1",
    firstName: "Virginie",
    lastName: "Créma",
    email: "virginiecrema@gmail.com",
    address: "11 rue Général de Gaulle",
    postalCode: 22400,
    city: "Lamballe",
    state: "France",
    phone: "0629452656",
    lat: 48.47205227223322,
    long: -2.5152087616876293,
    admin: false,
  },
];

const TOKEN =
  "pk.eyJ1Ijoic2lkbzY5IiwiYSI6ImNsOThwZXc3bzJzZDYzdXFtbG96NzVpaW8ifQ.WnVIKGvDc4mq4F7sYXVF5Q";

export default function UserLocation_And_IP_Address() {
  const [viewport, setViewport] = useState({
    height: "100%",
    latitude: 48.506087,
    longitude: -2.76682,
    zoom: 12,
    width: "100%",
  });

  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map(
    (result) => (
      console.log("result :", result),
      {
        latitude: result.lat,
        longitude: result.long,
      }
    )
  );

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  // const [viewport, setViewport] = useState({
  //   height: "100%",
  //   latitude: center.latitude,
  //   longitude: center.longitude,
  //   zoom: 11,
  //   width: "100%",
  // });

  const [userposition, setUserPosition] = useState(null);

  useEffect(() => {
    function getUserPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setViewport({ ...viewport, latitude, longitude });
          setUserPosition({ latitude, longitude });
        });
      }
    }

    getUserPosition();
  }, []);

  return (
    <Box
      sx={{
        height: "80vh",
        width: "80vw",
      }}
    >
      <ReactMapGL
        mapboxAccessToken={TOKEN}
        initialViewState={viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle='mapbox://styles/sido69/clnn4zabf008p01pgb6gt6fvl/draft'
        transitionDuration='200'
        attributionControl={true}
      >
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          offesetLeft={-20}
          offsetTop={-10}
        >
          <IoIosPin
            color={colorIcon_Icon_LocationOfTheLoggedInUser}
            size={sizeIcon_LocationOfTheLoggedInUser}
          />
          <Popup
            closeOnClick={false}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
          >
            <Typography variant='h6'>
              Localisation de l'utilisateur connecté
            </Typography>
          </Popup>
        </Marker>

        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              latitude={result.lat}
              longitude={result.long}
              offesetLeft={-20}
              offsetTop={-10}
            >
              {result.admin ? (
                <BsFillPinAngleFill
                  color={colorIcon_Icon_Admin}
                  onClick={() => setSelectedLocation(result)}
                  size={sizeIcon}
                />
              ) : (
                <BsFillPinAngleFill
                  color={colorIcon_Icon_User}
                  onClick={() => setSelectedLocation(result)}
                  size={sizeIcon}
                />
              )}
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                <Typography variant='h6'>
                  Addresse IP : {result.ipAddress}
                </Typography>
                <Typography variant='h6'>
                  {result.firstName + " " + result.lastName}
                </Typography>
                <Typography variant='h6'>{result.email}</Typography>
                <Typography variant='h6'>
                  {result.address + " " + result.postalCode + " " + result.city}
                </Typography>
                <Typography variant='h6'>Tel : {result.phone}</Typography>
                <Typography variant='h6'>
                  Latitude / Longitude : {result.lat + " " + result.long}
                </Typography>
                {result.admin ? (
                  <Typography
                    style={{
                      border: "3px solid #008000",
                      borderRadius: "25px",
                      color: "#008000",
                      textAlign: "center",
                    }}
                    variant='h6'
                  >
                    ADMIN
                  </Typography>
                ) : (
                  <Typography
                    style={{
                      border: "3px solid #F00",
                      borderRadius: "25px",
                      color: "#F00",
                      textAlign: "center",
                    }}
                    variant='h6'
                  >
                    UTILISATEUR
                  </Typography>
                )}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
        <NavigationControl position='bottom-right' />
      </ReactMapGL>
    </Box>
  );
}
