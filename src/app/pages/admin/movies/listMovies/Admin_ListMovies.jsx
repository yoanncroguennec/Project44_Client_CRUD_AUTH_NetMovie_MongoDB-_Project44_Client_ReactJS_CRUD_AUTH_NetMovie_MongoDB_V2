import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Button, Tooltip, Typography, styled } from "@mui/material";
import moment from "moment";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// COMMON
import { Component_Global_List } from "../../../../components/common";
// ICONS
import { RiDeleteBin2Fill } from "react-icons/ri";
const colorIcon = "#F7230C";
const sizeIcon = 30;
// STYLES
const TypoBold = styled(Typography)(({ }) => ({
  fontWeight: "bold",
}));


export default function Admin_ListMovies() {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies`
        );
        console.log(data.movies);
        setListMovies(data.movies);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);

  const columns = [
    {
      description: "This column has a value getter and is not sortable.",
      editable: true,
      field: `img`,
      headerName: "Image",
      renderCell: (params) => (
        <Tooltip title={params.row.name}>
          <Avatar
            alt={params.row.name}
            src={params.row.img}
            sx={{ width: 56, height: 56 }}
          />
        </Tooltip>
      ),
      sortable: true,
      type: "string",
      width: 110,
    },
    {
      field: "_id",
      headerName: "ID",
      renderCell: (params) =>
        params.row._id ? (
          <TypoBold variant='h6'>{params.row._id}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
      width: 90,
    },
    {
      editable: true,
      field: "name",
      headerName: "Nom du film",
      renderCell: (params) =>
        params.row.name ? (
          <TypoBold variant='h6'>{params.row.name}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
      width: 150,
    },
    {
      field: "actors",
      headerName: "Acteurs",
      width: 150,
      editable: true,
      renderCell: (params) =>
        params.row.actors ? (
          <TypoBold variant='h6'>{params.row.actors}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
    },
    {
      description: "This column has a value getter and is not sortable.",
      editable: true,
      field: "realisators",
      headerName: "Réalisateur(s)",
      renderCell: (params) =>
        params.row.realisators ? (
          <TypoBold variant='h6'>{params.row.realisators}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
      sortable: true,
      type: "string",
      width: 110,
    },
    {
      description: "This column has a value getter and is not sortable.",
      editable: true,
      field: "desc",
      headerName: "Description",
      renderCell: (params) =>
        params.row.desc ? (
          <TypoBold variant='h6'>{params.row.desc}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
      sortable: false,
      width: 350,
    },

    {
      editable: true,
      field: "country",
      headerName: "Pays",
      width: 100,
    },
    {
      editable: true,
      field: "productionCompany",
      headerName: "Société de production",
      renderCell: (params) =>
        params.row.productionCompany ? (
          <TypoBold variant='h6'>{params.row.productionCompany}</TypoBold>
        ) : (
          <TypoBold variant='h6'>Pas indiqué</TypoBold>
        ),
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Créé le",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      editable: true,
      field: "year",
      headerName: "Année",
      width: 70,
    },
    {
      editable: true,
      field: "genre",
      headerName: "genres",
      renderCell: (params) => (
        <ReactPlayer
          url={params.row.trailer}
          playing={false}
          controls={true}
          height={60}
          width={100}
          style={{ height: "15px", width: "50px" }}
        />
      ),
      width: 150,
    },
    {
      editable: false,
      field: "trailer",
      headerName: "Bande-annonce",
      width: 150,
    },
    {
      editable: false,
      field: "movieLink",
      headerName: "Lien du Film (Entier)",
      renderCell: (params) => (
        <Iframe
          url={params.row.movieLink}
          width='100px'
          height='60px'
          display='block'
          position='relative'
          styles={{ margin: "0 auto" }}
        />
      ),
      width: 150,
    },
    {
      editable: false,
      field: "Actions",
      headerName: "Actions",
      renderCell: (params) => (
        <>
          <Tooltip title='Modifiez'>
            <Button
              href={`updateMovie/${params.row._id}`}
              variant='outlined'
            >
              Modifiez
            </Button>
          </Tooltip>
          <Tooltip title='Supprimez'>
            <span>
              <RiDeleteBin2Fill color={colorIcon} size={sizeIcon} />
            </span>
          </Tooltip>
        </>
      ),
      width: 250,
    },
  ];

  return (
    <Component_Global_List rows={listMovies} title='films' columns={columns} />
  );
}
