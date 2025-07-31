import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Menu, Stack } from "@mui/material";

function MUIAppbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const openControl = anchorEl ? true : false;

  const closeMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "pink" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            MUI
          </Typography>
          <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
            <Button sx={{ color: "white" }}>Anasayfa</Button>
            <Button sx={{ color: "white" }}>Hakkımızda</Button>
            <Button sx={{ color: "white" }} onClick={openMenu}>
              Ürünler
            </Button>
            <Button sx={{ color: "white" }}>İletişim</Button>
          </Stack>

          <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
            <MenuItem>Gömlek</MenuItem>
            <MenuItem>Pantolon</MenuItem>
            <MenuItem>Tişört</MenuItem>
            <MenuItem>Elbise</MenuItem>
          </Menu>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MUIAppbar;
