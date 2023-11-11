import { useState, useEffect, } from "react";
import axios from "axios";
import { Avatar, Button, Tooltip, styled, Typography } from "@mui/material";
import moment from "moment";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// ICONS
import { RiDeleteBin2Fill } from "react-icons/ri"
import Component_Global_List from "../../lists/Component_Global_List";
const colorIcon = "#F7230C";
const sizeIcon = 30;


const columns = [
  {
    description: "This column has a value getter and is not sortable.",
    editable: true,
    field: `img`,
    headerClassName: "super-app-theme--header",
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
    renderHeader: (params) => <Typography variant='h6'>Image</Typography>,
    sortable: true,
    type: "string",
    width: 110,
  },
  {
    field: "_id",
    headerClassName: "super-app-theme--header",
    headerName: "ID",
    width: 90,
    renderCell: (params) =>
      params.row._id ? (
        <Typography variant='body1'>{params.row._id}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => <Typography variant='h6'>ID</Typography>,
  },
  {
    field: "name",
    headerClassName: "super-app-theme--header",
    headerName: "Nom du film",
    width: 350,
    editable: true,
    renderCell: (params) =>
      params.row.name ? (
        <Typography variant='body1'>{params.row.name}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => <Typography variant='h6'>Nom du film</Typography>,
  },
  {
    field: "actors",
    headerClassName: "super-app-theme--header",
    headerName: "Acteurs",
    width: 450,
    editable: true,
    renderCell: (params) =>
      params.row.actors ? (
        <Typography variant='body1'>{params.row.actors}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => <Typography variant='h6'>Acteurs</Typography>,
  },
  {
    field: "realisators",
    headerClassName: "super-app-theme--header",
    headerName: "Réalisateur(s)",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    type: "string",
    width: 180,
    editable: true,
    renderCell: (params) =>
      params.row.realisators ? (
        <Typography variant='body1'>{params.row.realisators}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => (
      <Typography variant='h6'>Réalisateur(s)</Typography>
    ),
  },
  {
    field: "desc",
    headerClassName: "super-app-theme--header",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 450,
    editable: true,
    renderCell: (params) =>
      params.row.desc ? (
        <Typography variant='body1'>{params.row.desc}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => <Typography variant='h6'>Description</Typography>,
  },

  {
    field: "country",
    headerClassName: "super-app-theme--header",
    headerName: "Pays",
    renderHeader: (params) => <Typography variant='h6'>Pays</Typography>,
    width: 100,
    editable: true,
  },
  {
    field: "productionCompany",
    headerClassName: "super-app-theme--header",
    headerName: "Société de production",
    width: 100,
    editable: true,
    renderCell: (params) =>
      params.row.productionCompany ? (
        <Typography variant='body1'>{params.row.productionCompany}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => (
      <Typography variant='h6'>Société de production</Typography>
    ),
  },

  {
    field: "createdAt",
    headerClassName: "super-app-theme--header",
    headerName: "Créé le",
    width: 150,
    renderCell: (params) =>
      moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    renderHeader: (params) => <Typography variant='h6'>Créé le</Typography>,
  },
  {
    field: "year",
    headerClassName: "super-app-theme--header",
    headerName: "Année",
    renderHeader: (params) => <Typography variant='h6'>Année</Typography>,
    width: 70,
    editable: true,
  },
  {
    field: "genre",
    headerClassName: "super-app-theme--header",
    headerName: "genres",
    width: 150,
    editable: true,
    renderCell: (params) =>
      params.row.genre ? (
        <Typography variant='body1'>{params.row.genre}</Typography>
      ) : (
        <Typography variant='body1'>Pas indiqué</Typography>
      ),
    renderHeader: (params) => <Typography variant='h6'>Genres</Typography>,
  },
  {
    field: "trailer",
    headerClassName: "super-app-theme--header",
    headerName: "Bande-annonce",
    width: 150,
    editable: false,
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
    renderHeader: (params) => (
      <Typography variant='h6'>Bande-annonce</Typography>
    ),
  },
  {
    field: "movieLink",
    headerClassName: "super-app-theme--header",
    headerName: "Lien du Film (Entier)",
    width: 150,
    editable: false,
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
    renderHeader: (params) => (
      <Typography variant='h6'>Lien du Film</Typography>
    ),
  },
  {
    field: "Actions",
    headerClassName: "super-app-theme--header",
    headerName: "Actions",
    width: 250,
    editable: true,
    renderCell: () => (
      <>
        <Tooltip title='Modifiez'>
          <Button variant='outlined'>Modifiez</Button>
        </Tooltip>
        <Tooltip title='Supprimez'>
          <span>
            <RiDeleteBin2Fill color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      </>
    ),
    renderHeader: (params) => <Typography variant='h6'>Actions</Typography>,
  },
];

export default function ListsTheLatestMoviesInBDD() {
  // GET API Display Latest Movies In BDD
  const [displayLatestMoviesInBDD, setdisplayLatestMoviesInBDD] = useState([]);
  const [loading, setLoading] = useState(false);

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

    return (
      <Component_Global_List
        rows={displayLatestMoviesInBDD}
        title='Derniers films ajoutés sur Net Movie :'
        columns={columns}
      />
    );

}
