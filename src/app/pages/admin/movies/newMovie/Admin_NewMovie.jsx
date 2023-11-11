import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

export default function Admin_NewMovie() {
  const [list, setList] = useState(null);

    const [listsCategories, setListsCategories] = useState([]);

    useEffect(() => {
      async function getLists() {
        try {
          const res = await axios.get(
            `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`
          );

          // console.log("lists", res.data);
          setListsCategories(res.data.list);
        } catch (err) {
          console.log(err);
        }
      }
      getLists();
    }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies",
        // "https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie",
        list
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      setList(null);
      navigate("../admin/admin_CategoriesListMovies");
      // console.log(res.data);
      // console.log(`Vous avez ajouté un nouveau film : ${list}`);
    } catch (error) {
      console.log("error.res.data", error.res.data);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          color: "#000",
          // background: "rgba(0, 0, 0, 0.5)",
          marginRight: "150px",
          width: "70%",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          borderRadius: "25px",
          padding: "25px",
          color: "#FFF",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant='h5'>
          Nouveau film (Admin) :
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            // width: "550px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <TextField
              label='Nom du film'
              name='name'
              onChange={handleChange}
              style={{ margin: "10px 0", width: "20%" }}
              variant='outlined'
            />
            <TextField
              label='Réalisateur(s)'
              multiline
              name='realisators'
              onChange={handleChange}
              rows={2}
              style={{ margin: "10px 0", width: "20%" }}
              variant='outlined'
            />
            <TextField
              label='Acteur(s)'
              multiline
              name='actors'
              onChange={handleChange}
              rows={3}
              style={{ margin: "10px 0", width: "40%" }}
              variant='outlined'
            />
          </Box>
          <Box
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <TextField
              label='Description'
              name='desc'
              multiline
              onChange={handleChange}
              rows={9}
              style={{ margin: "10px 0" }}
              variant='outlined'
            />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "40%",
              }}
            >
              <TextField
                label='Bande-annonce'
                name='trailer'
                onChange={handleChange}
                style={{ margin: "10px 0" }}
                variant='outlined'
              />
              <TextField
                label='Pays de production'
                name='country'
                onChange={handleChange}
                style={{ margin: "10px 0" }}
                variant='outlined'
              />
              <TextField
                label='Lien du film'
                name='movieLink'
                onChange={handleChange}
                style={{ margin: "10px 0" }}
                variant='outlined'
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <TextField
              label='Poster du film'
              name='img'
              onChange={handleChange}
              style={{ margin: "10px 0" }}
              variant='outlined'
            />
            <TextField
              label='Société de production'
              name='productionCompany'
              onChange={handleChange}
              style={{ margin: "10px 0" }}
              variant='outlined'
            />
            <input
              name='year'
              onChange={handleChange}
              placeholder='Année'
              step={1}
              min={1930}
              max={2050}
              type='range'
            />
          </Box>

          <Typography variant='body1'>
            Liste des catégories à sélectionner
          </Typography>
          <select multiple name='genre' onChange={handleSelect}>
            {listsCategories?.map(({ _id, genre }) => (
              <option
                key={_id}
                value={_id}
                style={{
                  background: "",
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "nowrap",
                  display: "block",
                  whiteSpace: "nowrap",
                  minHeight: "1.2em",
                  padding: "16px",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {genre}
              </option>
            ))}
          </select>
          <Button
            style={{ margin: "0 auto", borderColor: "#F00", color: "#F00" }}
            onClick={handleSubmit}
            variant='outlined'
          >
            Créer
          </Button>
        </form>
      </div>
      {/* <DetailedListOfFilmsByCategory /> */}
    </div>
  );
}
