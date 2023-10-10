import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import QR_Code from "react-qr-code";

export default function Generate_QR_Code() {
  const [text, setText] = useState("");

  function ChangeInputCodeQR(e) {
    setText(e.target.value)
  }
  return (
    <div>
      <Typography variant='h2'>Générer un code QR</Typography>
      <QR_Code value={text} />
      <Typography variant='h2'></Typography>
      <TextField
        label='Entrer un texte'
        onChange={(e) => {
          ChangeInputCodeQR(e);
        }}
        type='text'
        value={text}
        variant='outlined'
      />
    </div>
  );
}