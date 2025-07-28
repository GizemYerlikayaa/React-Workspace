import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";

function MUITextField() {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="İsim" variant="outlined" />
        <TextField label="İsim" variant="filled" />
        <TextField label="İsim" variant="standard" />
      </div>
      <div>
        <div style={{ marginBottom: "30px" }}>
          <TextField label="İsim" variant="outlined" color="secondary" />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <TextField
            label="İsim"
            variant="outlined"
            color="secondary"
            helperText="İsminizi Giriniz"
          />
          <TextField
            label="Şifre"
            variant="outlined"
            color="error"
            helperText="Şifrenizi Kimseyle Paylaşmayın!"
          />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <TextField
            label="Kimlik No"
            variant="outlined"
            color="secondary"
            helperText="İsminizi Giriniz"
            disabled
          />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <TextField
            InputProps={{ readOnly: true }}
            value={"Gizem"}
            variant="outlined"
            color="secondary"
            helperText="İsminizi Giriniz"
            disabled
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <TextField
            label="İsminizi Giriniz"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            label="Soyisminizi Giriniz"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            label="Soyisminizi Giriniz"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default MUITextField;
