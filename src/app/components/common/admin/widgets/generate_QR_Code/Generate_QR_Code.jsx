import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import QR_Code from "react-qr-code";

export default function Generate_QR_Code() {
  const style = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    height: 300,
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

    const [text, setText] = useState("");

  function ChangeInputCodeQR(e) {
    setText(e.target.value)
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        // onClose={handleClose}
      >
        <Box sx={style}>
          <Typography sx={{ fontWeight: "bold", textAlign: "center"}} variant='h5'>Générer un code QR</Typography>
          <QR_Code value={text} style={{ height: "150px", width: "150px" }} />
          <TextField
            label='Entrer un texte'
            onChange={(e) => {
              ChangeInputCodeQR(e);
            }}
            type='text'
            value={text}
            variant='outlined'
          />
        </Box>
      </Modal>
    </div>
  );
}
