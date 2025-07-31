import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MUIDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const type = {
    YES: "YES",
    NO: "NO",
  };

  const result = (typeParam) => {
    console.log("Kullanıcı Sonucu :", typeParam);
    if (typeParam == type.YES) {
      console.log("Kullanıcı Sözleşmeyi Onayladı");
    } else {
      console.log("Kullanıcı Sözleşmeyi Onaylamadı");
    }
  };

  return (
    <div>
      <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Sözleşme Koşulları</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sözleşme Koşullarını Kabul Ediyor Musunuz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => result(type.YES)}>Evet, Onaylıyorum.</Button>
          <Button onClick={() => result(type.NO)}>Hayır, Onaylamıyorum.</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MUIDialog;
