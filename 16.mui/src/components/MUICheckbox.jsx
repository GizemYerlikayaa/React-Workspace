import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function MUICheckbox() {
  const [isConfirm, setIsConfirm] = useState(false);

  const submit = () => {
    if (!isConfirm) {
      alert("Sözleşmeyi onaylayınız");
    } else {
      alert(" İşlem Başarılı şekilde tamamlandı");
    }
  };
  return (
    <div>
      {/* <FormControl component="fieldset">
        <FormLabel component="legend">Eğitim Durumu</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="İlkokul"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked disabled />}
            def
            label="Ortaokul"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Lise"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Üniversite"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl> */}

      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isConfirm}
                onChange={(e) => setIsConfirm(e.target.checked)}
              />
            }
            label="Kullanım Koşullarını Kabul Ediyorum."
            labelPlacement="end"
          />
          <Button onClick={submit} variant="contained" color="warning">
            Formu Gönder
          </Button>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default MUICheckbox;
