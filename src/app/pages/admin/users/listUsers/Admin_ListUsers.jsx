import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
// IMGS
import yyy from "./avatar3DHommeV1.png";
// ICONS
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./styles.css";
import { Component_Global_List } from "../../../../components/common";
const colorIcon = "#F7230C";
const sizeIcon = 35;
// STYLES

export default function Admin_ListUsers() {
  const [listusers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  ////////////////////////////////////////////////////////
  ///////////////// A REVOIR FUNCTION DELETE /////////////////
  ////////////////////////////////////////////////////////
  const handleDelete = (id) => {
    setListUsers(listusers.filter((item) => item.id !== id));
  };

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/users`
        );
        // console.log(data.users);
        setListUsers(data.users);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);

  const columns = [
    {
      field: `img`,
      headerName: "Avatar",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      type: "string",
      width: 110,
      editable: true,
      renderCell: (params) => (
        <Tooltip title={params.row.account.username}>
          <Avatar
            alt={params.row.account.username}
            src={params.row.account.avatar.url}
            sx={{ width: 56, height: 56 }}
          />
        </Tooltip>
      ),
    },
    {
      field: "ipAddress",
      headerName: "Adresse IP",
      width: 200,
      renderCell: (params) =>
        params.row.ipAddress ? (
          <Typography variant='h6'>{params.row.ipAddress}</Typography>
        ) : (
          <Typography sx={{ color: "#F00", fontWeight: "bold" }} vvariant='h6'>
            ATTENTION ! Pas indiqué
          </Typography>
        ),
    },
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "account.username",
      headerName: "Pseudo",
      width: 100,
      editable: true,
      renderCell: (params) =>
        params.row.account.username ? (
          <Typography variant='h6'>{params.row.account.username}</Typography>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "lastName",
      headerName: "Nom de famille",
      width: 100,
      editable: true,
      renderCell: (params) =>
        params.row.lastName ? (
          <Typography variant='h6'>{params.row.lastName}</Typography>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "firstName",
      headerName: "Prénom",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      type: "string",
      width: 80,
      editable: true,
      renderCell: (params) =>
        params.row.firstName ? (
          <Typography variant='h6'>{params.row.firstName}</Typography>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      editable: true,
      renderCell: (params) =>
        params.row.email ? (
          <Link to={`mailto:${params.row.email}`}>
            <Typography sx={{ color: "#000", textDecoration: "none" }} variant='h6'>
              {params.row.email}
            </Typography>
          </Link>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "phone",
      headerName: "Téléphone",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      editable: true,
      renderCell: (params) =>
        params.row.phone ? (
          <Link to={`tel:${params.row.phone}`}>
            <Typography sx={{ color: "#FFF" }} variant='body2'>
              {params.row.phone}
            </Typography>
          </Link>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "address/postalCode/city/country",
      headerName: "Addresse/Code postal/Ville/Pays",
      width: 320,
      editable: true,
      renderCell: (params) =>
        params.row.address ||
        params.row.postalCode ||
        params.row.city ||
        params.row.state ? (
          <Typography variant='h6'>
            {` ${params.row.address}, ${params.row.postalCode} ${params.row.city}, ${params.row.state}`}
          </Typography>
        ) : (
          <Typography variant='h6'>Pas indiqué</Typography>
        ),
    },
    {
      field: "sex",
      headerName: "Sexe",
      width: 90,
      editable: true,
      renderCell: (params) =>
        params.row.sex ? (
          <img
            style={{ height: "40px", width: "30px" }}
            src='./avatar3DFemmeV3.png'
            alt='avatar3DFemmeV3'
          />
        ) : (
          <img
            style={{ height: "80px", width: "90px" }}
            src={yyy}
            alt='avatar3DHommeV3'
          />
        ),
    },
    {
      field: "createdAt",
      headerName: "Date de création",
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Typography variant='h6'>
          {moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS")}
        </Typography>
      ),
    },

    {
      field: "",
      headerName: "Admin/Pas admin",
      width: 150,
      renderCell: (params) =>
        params.row.admin ? (
          <Typography
            style={{
              background: "#3AF24B",
              border: "5px solid #1E2F97",
              borderRadius: "25px",
              textAlign: "center",
              padding: "5px 15px",
              width: "120px",
            }}
            variant='h6'
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
            variant='h6'
          >
            Pas Admin
          </Typography>
        ),
    },

    {
      field: "A REVOIR",
      headerName: "A REVOIR - Conecté/Pas connecté",
      width: 200,
      editable: false,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 250,
      editable: true,
      renderCell: (params) => (
        <>
          <Tooltip title='Modifiez'>
            <Button variant='outlined'>Modifiez</Button>
          </Tooltip>
          <Tooltip title='Supprimez'>
            <span>
              <RiDeleteBin2Fill
                onClick={() => handleDelete(params.row.id)}
                color={colorIcon}
                size={sizeIcon}
              />
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  return <Component_Global_List rows={listusers} title="utilisateurs" columns={columns} />;
}
