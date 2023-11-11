import { Box, Modal, Typography, styled } from "@mui/material";
import Iframe from "react-iframe";
// ICONS
import { AiOutlineClose } from "../../../../utils/assets/icons";

//////////////////// STYLES MODAL PLAYER ////////////////////
const BoxModalPlayerTrailer = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.8)",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  color: "#FFF",
  left: "50%",
  height: 500,
  p: 4,
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  [theme.breakpoints.down("sm")]: {
    width: 350,
  },
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function ModalTheWholeFilm({
  // Props
  modalTheWholeMovie,
  ///////////
  movieLink,
  // Functions
  CloseModalTheWholeMovie,
}) {
  return (
    <Modal
      open={modalTheWholeMovie}
      onClose={CloseModalTheWholeMovie}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <BoxModalPlayerTrailer>
        <Typography align='center' variant='h4'>
          FILM EN ENTIER
        </Typography>
        <AiOutlineClose
          color='#FF0000'
          onClick={CloseModalTheWholeMovie}
          size={35}
          style={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <div style={{ height: "85%" }}>
          <Iframe
            url={movieLink}
            width='90%'
            height='90%'
            display='block'
            position='relative'
            styles={{ margin: "0 auto" }}
          />
        </div>
      </BoxModalPlayerTrailer>
    </Modal>
  );
}
