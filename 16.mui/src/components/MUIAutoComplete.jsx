import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function MUIAutoComplete() {
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
    { label: "aasdasd", id: 3 },
    { label: "dfgdfgdfg", id: 4 },
    { label: "hjkhjkhjkhj", id: 5 },
    { label: "vbvbnvbnvbn", id: 6 },
    { label: "wsöcpowdc", id: 7 },
  ];
  return (
    <div>
      <Autocomplete
        sx={{ width: 300 }}
        disablePortal
        options={options}
        renderInput={(params) => <TextField {...params} label="Filmler" />}
      />
    </div>
  );
}

export default MUIAutoComplete;
