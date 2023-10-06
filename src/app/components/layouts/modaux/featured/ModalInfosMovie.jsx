import {
  Button,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// ICONS
import { AiOutlineClose, BsFillPlayFill } from "../../../../utils/assets/icons";
// STYLES
import {
  BoxModalInfosMovie,
  StylesTypoDesc,
  TypoMovie,
} from "./StylesModalInfosMovie";
const sizeIcon = 35;

//////////////////// EXPORT FUNCTION ////////////////////
export default function ModalInfosMovie({
  // Props
  name,
  desc,
  openModalInfosMovie,
  // Functions
  CloseModalInfosMovie,
  OpenModalTrailer,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
        <TypoMovie variant={matches ? "h6" : "h2"}>{name}</TypoMovie>
        <div
          dangerouslySetInnerHTML={{
            __html: `${desc}`,
          }}
          style={StylesTypoDesc}
        />
        <div>
          <div>
            <Button variant='contained' onClick={OpenModalTrailer}>
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Lecture</Typography>
            </Button>
          </div>
        </div>
      </BoxModalInfosMovie>
    </Modal>
  );
}
