import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function MUITooltip() {
  return (
    <div style={{ margin: "200px" }}>
      <Tooltip title="Silmek İçin Tıklayınız" placement="bottom-start">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default MUITooltip;
