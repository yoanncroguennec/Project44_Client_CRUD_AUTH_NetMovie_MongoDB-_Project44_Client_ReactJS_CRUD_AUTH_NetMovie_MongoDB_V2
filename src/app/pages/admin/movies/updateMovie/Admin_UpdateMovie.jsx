import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
// STYLES
import {
  RootHome,
  TypoBold,
  BoxForm,
  BoxForm2,
} from "./StylesAdmin_UpdateMovie";

export default function Admin_UpdateMovie() {
  const [list, setList] = useState(null);
  const [dataByIdMovie, setDataByIdMovie] = useState({});
  const [listsCategories, setListsCategories] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovieId() {
      try {
        const res = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/${id}`
        );
        setDataByIdMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieId();

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
      const res = await axios.put(
        `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/updateMovie_ViaParamsId/${id}`,
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
      console.log(res.data);
      // console.log(`Vous avez ajouté un nouveau film : ${list}`);
    } catch (error) {
      console.log("error.res.data", error.res.data);
    }
  }

  return (
    <RootHome>
      <TypoBold variant='h4'>Mettre a jour le film (Admin) :</TypoBold>
      <form>
        <BoxForm>
          <Box style={{ width: "20%" }}>
            <TypoBold align='left' variant='h5'>
              Nom du film
            </TypoBold>
            <TextField
              InputProps={{
                style: { fontSize: 20, fontWeight: "bold" },
              }}
              label={dataByIdMovie.name}
              name='name'
              onChange={handleChange}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <Box style={{ width: "30%" }}>
            <TypoBold align='left' variant='h5'>
              Réalisateur(s)
            </TypoBold>
            <TextField
              label={dataByIdMovie.realisators}
              multiline
              name='realisators'
              onChange={handleChange}
              rows={2}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <Box style={{ width: "40%" }}>
            <TypoBold align='left' variant='h5'>
              Acteur(s)
            </TypoBold>
            <TextField
              label={dataByIdMovie.actors}
              multiline
              name='actors'
              onChange={handleChange}
              rows={3}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        </BoxForm>
        <BoxForm>
          <Box style={{ width: "55%" }}>
            <TypoBold align='left' variant='h5'>
              Description
            </TypoBold>
            <TextField
              label={dataByIdMovie.desc}
              name='desc'
              multiline
              onChange={handleChange}
              rows={11}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 25,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <BoxForm2>
            <TypoBold align='left' variant='h5'>
              Bande-annonce
            </TypoBold>
            <TextField
              label={dataByIdMovie.trailer}
              name='trailer'
              onChange={handleChange}
              style={{ margin: "10px 0" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
            <TypoBold align='left' variant='h5'>
              Pays de production
            </TypoBold>
            <TextField
              label={dataByIdMovie.country}
              name='country'
              onChange={handleChange}
              style={{ margin: "10px 0" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
            <TypoBold align='left' variant='h5'>
              Lien du film
            </TypoBold>
            <TextField
              label={dataByIdMovie.movieLink}
              name='movieLink'
              onChange={handleChange}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </BoxForm2>
        </BoxForm>
        <BoxForm>
          <Box style={{ width: "30%" }}>
            <TypoBold align='left' variant='h5'>
              Lien de l'affiche du film
            </TypoBold>
            <TextField
              label={dataByIdMovie.img}
              name='img'
              onChange={handleChange}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>

          <Box style={{ width: "30%" }}>
            <TypoBold align='left' variant='h5'>
              Compagnie production
            </TypoBold>
            <TextField
              label={dataByIdMovie.productionCompany}
              name='productionCompany'
              onChange={handleChange}
              style={{ margin: "10px 0", width: "100%" }}
              sx={{
                "& label": {
                  color: "secondary.main",
                  fontSize: 23,
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <Box style={{ width: "30%" }}>
            <TypoBold align='left' variant='h5'>
              Année du film (Ancienne date : {dataByIdMovie.year})
            </TypoBold>
            <Slider
              name='year'
              max={2050}
              min={1930}
              onChange={handleChange}
              type='range'
              valueLabelDisplay='auto'
            />
          </Box>
        </BoxForm>
        <Box style={{ width: "60%" }}>
          <TypoBold align='left' variant='h5'>
            Liste des catégories à sélectionner
          </TypoBold>
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
        </Box>

        <Button
          style={{ margin: "0 auto", borderColor: "#F00", color: "#F00" }}
          onClick={handleSubmit}
          variant='outlined'
        >
          Créer
        </Button>
      </form>
    </RootHome>
  );
}
