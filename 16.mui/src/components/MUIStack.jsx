import { Divider, Stack } from "@mui/material";
import React from "react";

function MUIStack() {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </Stack>
      <Stack
        sx={{ marginTop: "200px" }}
        direction={"column"}
        spacing={5}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </Stack>
    </div>
  );
}

export default MUIStack;
