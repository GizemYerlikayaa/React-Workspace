import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function MUISnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <Button size="small" color="error" onClick={handleClose}>
        Kapat
      </Button>
      <IconButton sx={{ color: "white" }} onClick={handleClose}>
        <CloseIcon></CloseIcon>
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Snackbar'ı Aç</Button>
      <Snackbar
        open={openSnackbar}
        message="Hata Oluştu !"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
}
