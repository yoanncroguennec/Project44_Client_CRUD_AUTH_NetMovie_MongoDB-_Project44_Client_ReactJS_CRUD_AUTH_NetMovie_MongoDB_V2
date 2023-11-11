import { Modal, Typography } from "@mui/material";
import ReactPlayer from "react-player";
// STYLES
import { BoxModalPlayerTrailer } from "./StylesModalPlayerTrailer";
// ICONS
import { AiOutlineClose } from "../../../../utils/assets/icons";

export default function ModalPlayerTrailer({
  // Props
  openModalTrailer,
  showPlayerTrailer,
  trailer,
  // Functions
  CloseModalTrailer,
}) {
  return (
    <Modal open={openModalTrailer} onClose={CloseModalTrailer}>
      <BoxModalPlayerTrailer>
        <Typography align='center' variant='h4'>
          Bande-Annonce
        </Typography>
        <AiOutlineClose
          color='#FF0000'
          onClick={CloseModalTrailer}
          size={35}
          style={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <div style={{ height: "85%" }}>
          <ReactPlayer
            url={trailer}
            width='100%'
            height='100%'
            controls={true}
            playing={showPlayerTrailer}
          />
        </div>
      </BoxModalPlayerTrailer>
    </Modal>
  );
}
