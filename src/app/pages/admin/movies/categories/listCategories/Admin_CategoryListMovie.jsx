import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import "./Admin_CategoryListMovie.css";
// ICONS
import { SlArrowDown } from "../../../../../utils/assets/icons";
import Extend_Admin_CategoryListMovie from "./Extend_Admin_CategoryListMovie";
const sizeIconArrowDown = 35;
const colorIconArrowDown = "#000";

export default function Admin_CategoryListMovie() {
  const [selectedTitleAccordion, setSelectedTitleAccordion] = useState(null);

  function toggleAccordion(_id) {
    if (selectedTitleAccordion == _id) {
      return setSelectedTitleAccordion(null);
    }

    setSelectedTitleAccordion(_id);
  }

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

  const dataTableHead = [
    "id",
    "name",
    "genre",
    "realisators",
    "actors",
    "desc",
    "year",
    "country",
  ];

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: "25px",
        display: "flex",
        // height: "80vh",
        justifyContent: "center",
        width: "80vw",
      }}
    >
      <div style={{ width: "100%" }}>
        {listsCategories.map(({ _id, title, type, genre, content }) => (
          <div>
            <div
              onClick={() => toggleAccordion(_id)}
              style={{
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.5)",
                color: "#FFF",
                display: "flex",
                flexWrap: "nowrap",
                fontWeight: "bold",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant='h5'>{title}</Typography>
              {selectedTitleAccordion === _id ? "-" : "+"}
            </div>
            <div
              className={
                selectedTitleAccordion === _id ? "content show" : "content"
              }
            >
              <div
                style={{
                  // overflow:
                  background: "green",
                  // height: "50%",
                  // scrollPaddingBottom: "",
                  marginBottom: "550px",
                  minHeight: "250px",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                {content?.map((idMovie) => (
                  <Extend_Admin_CategoryListMovie idMovie={idMovie} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
