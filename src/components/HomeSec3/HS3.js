import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import grid1 from "../../Images/grid1.png";
import grid2 from "../../Images/grid2.png";
import grid3 from "../../Images/grid3.png";
import grid4 from "../../Images/grid4.png";
import grid5 from "../../Images/grid5.png";
import grid6 from "../../Images/grid6.png";

function HS3() {
  const images = [grid1, grid2, grid3, grid4, grid5, grid6];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
      }}
    >
      <section style={{ width: "60vw" }}>
        <Grid>
          <Grid item xs={2} sm={4} md={4}>
            {images.map((gd) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={gd}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default HS3;
