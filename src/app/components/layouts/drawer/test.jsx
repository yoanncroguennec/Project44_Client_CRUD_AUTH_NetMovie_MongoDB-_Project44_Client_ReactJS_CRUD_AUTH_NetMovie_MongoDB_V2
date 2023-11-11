import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  //   InboxIcon,
  MailIcon,
  Typography,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { dataDrawerNavAdmin } from "../../../utils/assets/data/dataDrawerNavAdmin";

export default function DrawerNavigationAdmin() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className='testBg'
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "15px",
          width: "80%",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>ADMINISTRATEUR</Typography>
        <List>
          {dataDrawerNavAdmin.map(({ text, url, tooltip, icon, index }) => (
            <ListItem key={index} disablePadding>
              <Tooltip title={tooltip}>
                <Link to={url} className='globalLinks'>
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
  return (
    <div>
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title='Admin'>
            <div
              style={{
                background: "#FFF",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={toggleDrawer(anchor, true)}
            >
              {" "}
              <GrUserAdmin size={25} />
            </div>
          </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            // sx={{background: "red"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
