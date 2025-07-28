import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function MUIButton() {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">Kaydol</Button>
        <Button variant="outlined">Kaydol</Button>
        <Button variant="contained">Kaydol</Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button color="primary">Giriş Yap</Button>
        <Button color="error">Giriş Yap</Button>
        <Button color="info">Giriş Yap</Button>
        <Button color="secondary" variant="contained">
          Giriş Yap
        </Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button color="warning" size="large" variant="contained">
          Üye Ol
        </Button>
        <Button color="warning" size="medium" variant="outlined">
          Üye Ol
        </Button>
        <Button color="warning" size="small" variant="text">
          Üye Ol
        </Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button
          onClick={() => alert("İndirme Başarlı")}
          color="error"
          size="small"
          variant="contained"
          startIcon={<DownloadIcon />}
        >
          İndir
        </Button>
        <Button
          onClick={() => alert("İndirme Başarlı")}
          color="error"
          size="small"
          variant="contained"
          endIcon={<DownloadIcon />}
        >
          İndir
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
