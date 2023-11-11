import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, Typography, styled } from "@mui/material";
import Swal from "sweetalert2";
import { Component_Global_List } from "../../../../../components/common";
import { LuPenSquare } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
const sizeIcon = 40;
// STYLES
const TypoBold = styled(Typography)(({ img }) => ({
  fontWeight: "bold",
}));

export default function Admin_CategoryListMovie() {
  // GET CATEGORIES LIST MOVIES
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`
        );

        // console.log("lists", res.data);
        setLists(res.data.list);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);

  // DELETE BY ID
  function alertConfirmDelete(_id) {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer?",
      text: "Cette action est irréversible. Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annulez",
      confirmButtonText: "Oui, supprimez !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Supprimé !", "Votre fichier a été supprimé", "succès");
        handleDelete(_id);
      }
    });
  }

  async function handleDelete(_id) {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie/${_id}`,
      });
      // console.log("lists", res.data);
      // setLists(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  // COLUMNS
  const columns = [
    {
      editable: true,
      field: "_id",
      headerName: "ID",
      renderCell: (params) =>
        params.row._id ? (
          <TypoBold variant='body1'>{params.row._id}</TypoBold>
        ) : (
          <TypoBold variant='body1'>Pas indiqué</TypoBold>
        ),
      renderHeader: (params) => <TypoBold variant='h5'>ID</TypoBold>,
      width: 250,
    },
    {
      editable: true,
      field: "title",
      headerName: "title",
      renderCell: (params) =>
        params.row.title ? (
          <TypoBold variant='body1'>{params.row.title}</TypoBold>
        ) : (
          <TypoBold variant='body1'>Pas indiqué</TypoBold>
        ),
      renderHeader: (params) => <TypoBold variant='h5'>Titre</TypoBold>,
      width: 100,
    },
    {
      editable: true,
      field: "type",
      headerName: "Type",
      renderCell: (params) =>
        params.row.type ? (
          <TypoBold variant='body1'>{params.row.type}</TypoBold>
        ) : (
          <TypoBold variant='body1'>Pas indiqué</TypoBold>
        ),
      renderHeader: (params) => <TypoBold variant='h5'>Type</TypoBold>,
      width: 100,
    },
    {
      editable: true,
      field: "genre",
      headerName: "Genre",
      renderCell: (params) =>
        params.row.genre ? (
          <TypoBold variant='body1'>{params.row.genre}</TypoBold>
        ) : (
          <TypoBold variant='body1'>Pas indiqué</TypoBold>
        ),
      renderHeader: (params) => <TypoBold variant='h5'>Genre</TypoBold>,
      width: 100,
    },
    {
      field: "content",
      headerName: "ID des Films",
      renderCell: (params) => {
        return (
          <>
            {params.row.content.map((genre, index) => {
              console.log("genre", genre);

              return (
                // <Link> ////// A METTRE QU'ON CLIQUE SUR L'ID DU FILM ON EST REDIRIGE VERS LA FICHE DU FILM
                <TypoBold key={genre}>
                  {genre}
                  {index !== params.row.content.length - 1 && ` /`}
                </TypoBold>
                // </Link>
              );
            })}
          </>
        );
      },
      renderHeader: (params) => <TypoBold variant='h5'>ID des Films</TypoBold>,
      width: 450,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Tooltip title='modifier'>
              <LuPenSquare size={sizeIcon} />
            </Tooltip> */}
            <Tooltip title='Supprimer'>
              <MdDeleteOutline
                onClick={() => alertConfirmDelete(params.row._id)}
                // onClick={() => handleDelete(params.row._id)}
                size={sizeIcon}
              />
            </Tooltip>
            {/*  */}
          </>
        );
      },
    },
  ];

  return (
    <Component_Global_List
      rows={lists}
      title='catégories de films'
      columns={columns}
    />
  );
}
