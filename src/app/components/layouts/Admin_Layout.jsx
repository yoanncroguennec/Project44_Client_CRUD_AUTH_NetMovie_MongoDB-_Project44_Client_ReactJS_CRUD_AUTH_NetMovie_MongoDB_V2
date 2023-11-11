import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import DrawerNavigationAdmin from "./drawer/DrawerNavigationAdmin";
import { RootAdminOutlet } from "./StylesAdminLayout";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsFillShareFill } from "react-icons/bs";
import { FaShareAlt, FaCalculator, FaBarcode } from "react-icons/fa";
// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@material-ui/core/styles";
import Generate_QR_Code from "../common/admin/widgets/generate_QR_Code/Generate_QR_Code";
import { useOnHoverOutside } from "../../utils/hooks/movies/UseOnHoverOutside";

const actions = [
  { icon: "<FileCopyIcon />", name: <Generate_QR_Code /> },
  { icon: "<SaveIcon />", name: "Save" },
  { icon: "<PrintIcon />", name: "Print" },
  { icon: <BsFillShareFill size={35} />, name: "Share" },
];

export default function Admin_Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const useStyles = makeStyles({
    tooltip: {
      fontSize: 55,
    },
  });

  const classes = useStyles();
  // GET API All MOVIES
  const [allMovies, setAllMovies] = useState([]);
  const [countAllMovies, setAllCountMovies] = useState(0);
  const [userList, setUserList] = useState([]);
  const [countAllUsers, setcountAllUsers] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);

        setAllMovies(data.movies);
        setAllCountMovies(data.total);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();

    async function getAllUsers() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/users`
        );
        setUserList(data.users);
        setcountAllUsers(data.count);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getAllUsers();
  }, [allMovies, userList]);

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", width: "100vw" }}>
      <DrawerNavigationAdmin isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: isOpen ? "90vw" : "98vw",
        }}
      >
        <Typography variant='h4'>ADMIN</Typography>
        <RootAdminOutlet>
          <Outlet
            context={[
              allMovies,
              countAllMovies,
              userList,
              countAllUsers,
              loading,
            ]}
          />
          <SpeedDial
            ariaLabel='SpeedDial basic example'
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                TooltipClasses={classes}
              />
            ))}
          </SpeedDial>
        </RootAdminOutlet>
      </div>
    </div>
  );
}
