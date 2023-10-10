import { useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Global_OthersApplications_layouts({}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", width: "100vw"}}>
        <Outlet context={[]} />
      </div>
    </div>
  );
}
