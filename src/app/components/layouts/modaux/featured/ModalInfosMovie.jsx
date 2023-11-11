import { Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
// ICONS
import {
  AiOutlineClose,
  BsFillPlayFill,
  BsInfoCircle,
} from "../../../../utils/assets/icons";
// STYLES
import {
  BoxModalInfosMovie,
  TypoMovie,
  BoxThreeBtns,
} from "./StylesModalInfosMovie";
import { GlobalBtns } from "../..";
const sizeIconDesktop = 35;
const sizeIconMobile = 20;

/// EXPORT FUNCTION
export default function ModalInfosMovie({
  // Props
  name,
  desc,
  openModalInfosMovie,
  // Functions
  CloseModalInfosMovie,
  OpenModalTrailer,
  OpenModalTheWholeFilm,
}) {
  /// RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  /// DATA THREE BTNS
  const dataThreeBtns = [
    {
      onClickAction: OpenModalTrailer,
      icon: (
        <BsFillPlayFill size={matches ? sizeIconMobile : sizeIconDesktop} />
      ),
      title: "Bande-Annonce",
    },
    {
      onClickAction: CloseModalInfosMovie,
      icon: <BsInfoCircle size={matches ? sizeIconMobile : sizeIconDesktop} />,
      title: "Infos",
    },
  ];

  // RETURN
  return (
    <Modal
      open={openModalInfosMovie}
      onClose={CloseModalInfosMovie}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <BoxModalInfosMovie>
        <AiOutlineClose
          color='#FF0000'
          onClick={CloseModalInfosMovie}
          size={35}
          style={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <TypoMovie variant={matches ? "h6" : "h3"}>{name}</TypoMovie>
        <Typography variant={matches ? "body1" : "h6"}>{desc}</Typography>

        <BoxThreeBtns>
          {/* Two Btns Trailer + Info Movie */}
          {dataThreeBtns.map(({ onClickAction, icon, title }) => (
            <GlobalBtns
              colorIconBtn='#FFF'
              onClickAction={onClickAction}
              iconBtn={icon}
              textBtn={title}
            />
          ))}
          {/* Btn The whole Movie */}
          {matches ? (
            ""
          ) : (
            <GlobalBtns
              colorIconBtn='#FFF'
              onClickAction={OpenModalTheWholeFilm}
              iconBtn={
                <BsFillPlayFill
                  size={matches ? sizeIconMobile : sizeIconDesktop}
                />
              }
              textBtn='Voir le film'
            />
          )}
        </BoxThreeBtns>

        {/* <div>
          <div>
            <Button variant='contained' onClick={OpenModalTrailer}>
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Lecture</Typography>
            </Button>
          </div>
        </div> */}
      </BoxModalInfosMovie>
    </Modal>
  );
}
