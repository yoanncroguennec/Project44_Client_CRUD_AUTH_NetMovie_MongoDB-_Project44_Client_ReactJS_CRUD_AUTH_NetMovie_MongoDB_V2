import React, { useState } from "react";
import { dataExtendNavbarCellular } from "../../../../../utils/assets/movies/data";
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
        {dataExtendNavbarCellular.map((menu, id) => (
          <BoxItemNavbarForCellularTheBottom
            key={id}
            onClick={() => setActiveItem(id)}
          >
            {activeItem === id ? (
              <>
                <EffectActiveIcon>{menu.icon}</EffectActiveIcon>
                <EffectActiveText>
                  <Typography variant='body2'>{menu.nameItem}</Typography>
                </EffectActiveText>
              </>
            ) : (
              <>
                <EffectNoActiveIcon>{menu.icon}</EffectNoActiveIcon>
                <EffectNoActiveText>{menu.nameItem}</EffectNoActiveText>
              </>
            )}
          </BoxItemNavbarForCellularTheBottom>
        ))}
      </BoxListItemsNavbarForCellularTheBottom>
    </RootNavbarForCellularTheBottom>
  );
}
