import React, { forwardRef, useState } from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
// ICONS
import { BsFillInfoCircleFill } from "react-icons/bs";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PopupForForgottenPassword() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography onClick={handleClickOpen} variant='body2'>
       <BsFillInfoCircleFill color="#F00"/>  Mot de passe oublié
      </Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle
          sx={{
            color: "#F00020",
          }}
        >
          {" Mot de passe perdu ?"}
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              color: "#F00020",
              fontWeight: "bold",
            }}
            variant='body1'
          >
            Contactez l'administrateur du site internet Net Movie.<br />Dans le but de
            sécuriser le site internet. Cette action est également bénéfique
            pour le confort de tous les utilisateurs du site.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermez</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


