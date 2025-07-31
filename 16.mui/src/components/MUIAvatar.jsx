import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function MUIAvatar() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ width: "50px", height: "50px" }}
          alt="Remy Sharp"
          src="https://randomuser.me/api/portraits/women/11.jpg"
        />

        <Avatar
          sx={{ width: "50px", height: "50px" }}
          alt="Cindy Baker"
          src="https://randomuser.me/api/portraits/men/60.jpg"
        />
        <Avatar sx={{ width: "50px", height: "50px", bgcolor: "pink" }}>
          G
        </Avatar>
      </Stack>
    </div>
  );
}

export default MUIAvatar;
