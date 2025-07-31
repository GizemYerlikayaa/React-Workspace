import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function MUIBadge() {
  return (
    <div style={{ marginTop: "25px", marginLeft: "50px" }}>
      <Badge
        badgeContent={99}
        color="error"
        max={99}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon color="action" />
      </Badge>
    </div>
  );
}

export default MUIBadge;
