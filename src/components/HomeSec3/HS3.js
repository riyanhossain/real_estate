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
import React, { useContext } from "react";
import "./HS3.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import KitchenIcon from "@mui/icons-material/Kitchen";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { dataContext } from "../../App";

function HS3() {
  const houses = useContext(dataContext);
  console.log(houses);
  let navigate = useNavigate();
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
                <CardActionArea onClick={() => navigate(`/about/${gd.id}`)}>
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
                      {gd.Description.short}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent style={{ display: "flex" }}>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DirectionsCarIcon />
                    <strong style={{ marginLeft: "5px" }}>{gd.car}</strong>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BathroomIcon />
                    <strong style={{ marginLeft: "5px" }}>{gd.bath}</strong>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BedroomParentIcon />
                    <strong style={{ marginLeft: "5px" }}>{gd.bed}</strong>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <KitchenIcon />
                    <strong style={{ marginLeft: "5px" }}>{gd.kitchen}</strong>
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
