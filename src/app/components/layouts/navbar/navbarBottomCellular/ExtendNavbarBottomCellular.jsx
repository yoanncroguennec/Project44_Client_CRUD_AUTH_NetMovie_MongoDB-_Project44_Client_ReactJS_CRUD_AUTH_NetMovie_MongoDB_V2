import React, { useState } from "react";
import { dataExtendNavbarCellular } from "../../../../utils/assets/data";
// ICONS
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BoxListItemsNavbarForCellularTheBottom,
  CircleIndicatingTheSelectedItem,
  EffectActiveText,
  RootNavbarForCellularTheBottom,
  EffectActiveIcon,
  EffectNoActiveIcon,
  EffectNoActiveText,
  BoxItemNavbarForCellularTheBottom,
} from "./StylesExtendNavbarBottomCellular";
import { Link } from "react-router-dom";

export default function ExtendNavbarBottomCellular() {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [activeItem, setActiveItem] = useState(0);

  return (
    <RootNavbarForCellularTheBottom matches={matches}>
      <BoxListItemsNavbarForCellularTheBottom>
        <CircleIndicatingTheSelectedItem
          dataExtendNavbarCellular={dataExtendNavbarCellular}
          activeItem={activeItem}
        />
        {dataExtendNavbarCellular.map(({ id, url, nameItem, icon }) => (
          <Link to={url}>
            <BoxItemNavbarForCellularTheBottom
              key={id}
              onClick={() => setActiveItem(id)}
            >
              {activeItem === id ? (
                <>
                  <EffectActiveIcon>{icon}</EffectActiveIcon>
                  <EffectActiveText>
                    <Typography variant='body2'>{nameItem}</Typography>
                  </EffectActiveText>
                </>
              ) : (
                <>
                  <EffectNoActiveIcon>{icon}</EffectNoActiveIcon>
                  <EffectNoActiveText>{nameItem}</EffectNoActiveText>
                </>
              )}
            </BoxItemNavbarForCellularTheBottom>
          </Link>
        ))}
      </BoxListItemsNavbarForCellularTheBottom>
    </RootNavbarForCellularTheBottom>
  );
}
