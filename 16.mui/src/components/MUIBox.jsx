import React from "react";
import Box from "@mui/material/Box";

function MUIBox() {
  return (
    <div>
      <Box
        sx={{
          width: 250,
          height: 250,
          borderRadius: 1,
          bgcolor: "pink",
          "&:hover": {
            bgcolor: "aqua",
          },
        }}
      />
    </div>
  );
}
export default MUIBox;
