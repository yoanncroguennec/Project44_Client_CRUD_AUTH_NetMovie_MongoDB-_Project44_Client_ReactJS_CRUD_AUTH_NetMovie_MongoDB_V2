import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { AiOutlineLogout } from "react-icons/ai";
// DATE
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
import yyy from "./avatar3DHommeV1.png";
const sizeIcon = 40;

export default function MyProfile({
handleTokenAndId,
token,
id_Of_ConnectedUser,
}) {
const [userInfosConnected, setUserInfosConnected] = useState([]);
const [loading, setLoading] = useState(false);
const [sexOfTheLoggedInUser, setSexOfTheLoggedInUser ] = useState("");

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${id_Of_ConnectedUser}`
      );
      // console.log("data :", response.data);
      // console.log("sex :",response.data.account.sex);
      setUserInfosConnected(response.data);
      setSexOfTheLoggedInUser(response.data.account.sex);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  fetchData();
}, [id_Of_ConnectedUser]);

const {
  ipAddress,
  account,
  firstName,
  lastName,
  email,
  // sex,
  phone,
  address,
  postal_code,
  city,
  country,
  admin,
  createdAt,
} = userInfosConnected;

const [img, setImg] = useState(userInfosConnected.sex);
// console.log("rdf", img);

useEffect(() => {
  const imgAvatar = () => {
    if (img === true) {
      setImg(
        <img
          style={{ height: "450px", width: "300px" }}
          src='./avatar3DFemmeV3.png'
          alt='avatar3DFemmeV3'
        />
      );
    } else {
      setImg(
        <img
          style={{ height: "450px", width: "300px" }}
          src={yyy}
          alt='avatar3DHommeV3'
        />
      );
    }
  };

  imgAvatar();
}, []);


// const [tt, settt] = useState(account.address);

// console.log("userInfosConnected.sex :",tt);

  const infosMyAccount = [
    {
      title: "Prénom",
      desc: `${firstName ? `${firstName}` : "Non renseigné"}`,
    },
    {
      title: "Nom de Famille",
      desc: `${lastName ? `${lastName}` : "Non renseigné"}`,
    },
    {
      title: "Email",
      desc: `${email ? `${email}` : "Non renseigné"}`,
    },
    {
      title: "Numéro de téléphone",
      desc: `${phone ? `${phone}` : `${phone}`}`,
    },
    // {
    //   title: "Addresse",
    //   desc: `${
    //     account.address
    //       ? `${account && account.address && <>{account.address}</>}`
    //       : "Non renseigné"
    //   }`,
    // },
    {
      title: "Code Postal",
      desc: `${postal_code ? `${postal_code}` : "Non renseigné"}`,
    },
    {
      title: "Ville",
      desc: `${city ? `${city}` : "Non renseigné"}`,
    },
    {
      title: "Pays",
      desc: `${country ? `${country}` : "Non renseigné"}`,
    },
    {
      title: "Administrateur",
      desc: `${
        admin ? (
          <Typography
            style={{
              background: "#3AF24B",
              border: "5px solid #1E2F97",
              borderRadius: "25px",
              textAlign: "center",
              padding: "5px 15px",
              width: "120px",
            }}
            variant='body1'
          >
            Admin
          </Typography>
        ) : (
          <Typography
            style={{
              background: "#F7230C",
              border: "5px solid #1E2F97",
              borderRadius: "25px",
              padding: "5px 15px",
              textAlign: "center",
              width: "120px",
            }}
            variant='body1'
          >
            Pas Admin
          </Typography>
        )
      }`,
    },
    {
      title: "Compte créé le",
      desc: `${
        createdAt
          ? `${moment(createdAt).format("dddd DD MMMM YYYY")}`
          : "Non renseigné"
      }`,
    },
  ];

  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        {account && account.avatar && (
          <img
            alt='AvatarProfile'
            src={account.avatar.secure_url}
            style={{
              margin: "0 auto",
              border: "5px solid #000",
              borderRadius: "50%",
              height: "300px",
              width: "300px",
            }}
          />
        )}
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          paddingTop: 50,
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        {img}
        <div>
          <br />
          {admin ? (
            <Typography
              style={{
                background: "#3AF24B",
                border: "5px solid #1E2F97",
                borderRadius: "25px",
                textAlign: "center",
                padding: "5px 15px",
                width: "120px",
              }}
              variant='body1'
            >
              Admin
            </Typography>
          ) : (
            <Typography
              style={{
                background: "#F7230C",
                border: "5px solid #1E2F97",
                borderRadius: "25px",
                padding: "5px 15px",
                textAlign: "center",
                width: "120px",
              }}
              variant='body1'
            >
              Pas Admin
            </Typography>
          )}
          <List>
            <ListItem>
              <ListItemText
                align='center'
                primary='Pseudo'
                secondary={
                  <Typography variant='body2' style={{ color: "#0000FF" }}>
                    {account && account.username && <>{account.username}</>}
                    {account && account.address && <>{account.address}</>}
                  </Typography>
                }
                sx={{ margin: "-1px" }}
              />
            </ListItem>
            <Divider sx={{ background: "blue" }} />

            {infosMyAccount.map((infoMyAccount) => {
              return (
                <>
                  <ListItem>
                    <ListItemText
                      align='center'
                      primary={infoMyAccount.title}
                      secondary={
                        <Typography
                          variant='body2'
                          style={{ color: "#0000FF" }}
                        >
                          {infoMyAccount.desc}
                        </Typography>
                      }
                      sx={{ margin: "-1px" }}
                    />
                  </ListItem>
                  <Divider sx={{ background: "blue" }} />
                </>
              );
            })}
            <Tooltip title='Déconnexion'>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AiOutlineLogout
                  onClick={() => {
                    // Cookies.remove("token, id");
                    handleTokenAndId(null, null);
                  }}
                  size={sizeIcon}
                />
              </span>
            </Tooltip>
          </List>
        </div>
      </div>
    </Box>
  );
}
