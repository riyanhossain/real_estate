import {
  Button,
  ButtonGroup,
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
import "./HS3.css";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathroomIcon from '@mui/icons-material/Bathroom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { Col } from "react-bootstrap";

function HS3() {
  const houses = [
    {
      title: "Mato House",
      image: grid1,
      car: 3,
      bath: 2,
      bed: 3,
      kitchen: 1,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
    },
    {
      title: "Envo House",
      image: grid2,
      car: 4,
      bath: 3,
      bed: 3,
      kitchen: 2,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, provident quo!",
    },
    {
      title: "Roatolo House",
      image: grid3,
      car: 1,
      bath: 1,
      bed: 2,
      kitchen: 1,
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus.",
    },
    {
      title: "Halo House",
      image: grid4,
      car: 3,
      bath: 3,
      bed: 4,
      kitchen: 2,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ad.",
    },
    {
      title: "Hellfire House",
      image: grid5,
      car: 5,
      bath: 3,
      bed: 4,
      kitchen: 3,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel  eligendi dolores.",
    },
    {
      title: "Wallbroke House",
      image: grid6,
      car: 3,
      bath: 4,
      bed: 5,
      kitchen: 3,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
      }}
    >
      <section style={{ width: "75%" }}>
        <Grid container item spacing={3}>
          {houses.map((gd) => (
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="266"
                    width="336"
                    image={gd.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {gd.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {gd.Description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent style={{display: 'flex'}}>
                  <Col style={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
                  <DirectionsCarIcon/>
                  <strong style={{marginLeft: '5px'}}>{gd.car}</strong>
                  </Col>
                  <Col style={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
                  <BathroomIcon/>
                  <strong style={{marginLeft: '5px'}}>{gd.bath}</strong>
                  </Col>
                  <Col style={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
                  <BedroomParentIcon/>
                  <strong style={{marginLeft: '5px'}}>{gd.bed}</strong>
                  </Col>
                  <Col style={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
                  <KitchenIcon/>
                  <strong style={{marginLeft: '5px'}}>{gd.kitchen}</strong>
                  </Col>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}

export default HS3;
