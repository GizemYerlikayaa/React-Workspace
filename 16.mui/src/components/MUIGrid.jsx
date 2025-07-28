import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function MUIGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Paper style={{ padding: 16, textAlign: "center" }}>
            xs=12 md=6 lg=6
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Paper style={{ padding: 16, textAlign: "center" }}>
            xs=12 md=6 lg=6
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 2, lg: 4 }}>
          <Paper style={{ padding: 16, textAlign: "center" }}>
            xs=12 md=6 lg=6
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MUIGrid;
