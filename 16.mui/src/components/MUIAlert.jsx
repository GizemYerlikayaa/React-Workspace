import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

function MUIAlert() {
  return (
    <div>
      <Stack sx={{ width: "25%" }} spacing={2}>
        <Alert severity="success" variant="standard">
          Bu Bir Onay Mesajıdır.
        </Alert>
        <Alert severity="info" variant="outlined">
          Bu Bir Uyarı Mesajıdır.
        </Alert>
        <Alert severity="error" variant="filled">
          Bu Bir Hata Mesajıdır.
        </Alert>

        <Alert severity="success" variant="standard">
          Bu Bir Onay Mesajıdır.
          <AlertTitle>İşleminiz Başarıyla Gerçekleşti.</AlertTitle>
        </Alert>
      </Stack>
    </div>
  );
}

export default MUIAlert;
