import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AiOutlineUser } from "../../../../../utils/assets/icons";

export default function Widget({ type }) {
  const [allMovies, countAllMovies, userList, countAllUsers] =
    useOutletContext();

  let data;
  const [first] = useState(`${allMovies.length}`);

  const percentageTotalUsers = (countAllUsers * 100) / 1000;
  const percentageTotalMovies = (countAllMovies * 100) / 1000;

  switch (type) {
    case "user":
      data = {
        title: `${userList.length}  utilisateurs`,
        percentage: percentageTotalUsers,
        link: "Voir la liste",
        icon: (
          <AiOutlineUser
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "movies":
      data = {
        title: `${allMovies.length} films`,
        percentage: percentageTotalMovies,
        link: "Voir la liste",
        icon: (
          <AiOutlineUser
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "categoryMovies":
      data = {
        title: "Catégories de films",
        percentage: true,
        link: "Voir la liste",
        icon: (
          <AiOutlineUser
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  const { title, percentage, url, link, icon } = data;
  return (
    <div
      className='widget'
      style={{
        background: "rgba(255,255,255, 0.6)",
        border: "4px solid #000",
        color: "#000",
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        padding: "20px",
        WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
        boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
        borderRadius: "10px",
        height: "100px",
      }}
    >
      <div
        className='left'
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span
          className='title'
          style={{
            fontWeight: "bold",
            fontSize: "34px",
          }}
        >
          {title}
        </span>
        <span className='link'>{link}</span>
      </div>
      <div
        className='right'
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className='percentage positive'>
          {/* <KeyboardArrowUpIcon /> */}
          {percentage} % / 1000
        </div>
        {icon}
      </div>
    </div>
  );
}
