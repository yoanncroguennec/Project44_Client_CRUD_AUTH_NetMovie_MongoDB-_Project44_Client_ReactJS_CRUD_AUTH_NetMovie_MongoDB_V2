import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
// ICONS
import { MdExpandMore } from "react-icons/md";
import { Extend_DetailedListOfFilmsByCategory } from "../..";

export default function DetailedListOfFilmsByCategory() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);

  return (
    <div style={{ paddingRight: "150px" }}>
      {lists.map((list, index) => (
        <Accordion
          key={index}
          sx={{ background: "transparent", width: "450px" }}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            style={{
              background: "#000",
              border: "2px solid #F00",
              marginBottom: "15px",
            }}
          >
            <Typography sx={{ color: "#FFF" }} variant='body1'>
              {list.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#FFF",
              paddingTop: "50px",
              height: "250px",
              overflow: "scroll",
            }}
          >
            {list.content.map((idMovie, index) => (
              <Extend_DetailedListOfFilmsByCategory
                key={index}
                idMovie={idMovie}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
