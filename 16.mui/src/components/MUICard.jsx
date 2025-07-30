import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Mercedes from "../images/mercedes.jpg";

function MUICard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={Mercedes} title="Mercedes" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mercedes
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            doloremque non eum dignissimos quis impedit aliquid vitae minima
            iste? Deleniti?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Detayını Görüntüle</Button>
          <Button size="small">İletişime Geç</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MUICard;
