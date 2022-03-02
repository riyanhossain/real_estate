import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./H1.css";
import HS3 from "../../../HomeSec3/HS3";

function H1S2(props) {
  const { images, image } = props.h1;
  let [imgQ, setImageQ] = useState(image.home1);
  const handleClick = (i) => {
    setImageQ(i);
  };
  return (
    <div>


    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "75%", display: "flex" }}>
        <Col xs={8}>
          <img src={imgQ} alt="" style={{ width: "704px", height: "520px" }} />
          <div
            style={{
              width: "704px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {images.map((i) => (
              <img src={i} alt="" onClick={() => handleClick(i)} />
            ))}
          </div>
          <div
            style={{
              height: "147px",
              marginTop: "100px",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <h4 style={{ paddingTop: "30px", marginLeft: "40px" }}>Details</h4>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                justifyContent: "space-evenly",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DirectionsCarIcon />
                <strong style={{ marginLeft: "5px" }}>{props.h1.car}</strong>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BathroomIcon />
                <strong style={{ marginLeft: "5px" }}>{props.h1.bath}</strong>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BedroomParentIcon />
                <strong style={{ marginLeft: "5px" }}>{props.h1.bed}</strong>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KitchenIcon />
                <strong style={{ marginLeft: "5px" }}>
                  {props.h1.kitchen}
                </strong>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarTodayIcon />
                <strong style={{ marginLeft: "5px" }}>{props.h1.build}</strong>
              </Col>
            </div>
          </div>

          <div
            style={{
              height: "394px",
              marginTop: "15%",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <div>
              <h4 className="desCrip">Description</h4>

              <p className="desCrip">
                At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                ut ipsi auctori huius disciplinae placet: constituam, quid sit
                numeranda nec me ab illo inventore veritatis et expedita
                distinctio nam libero tempore, cum memoriter, tum etiam ac
                ratione.
                <br />
                <br />
                Si sine metu degendae praesidia firmissima filium morte multavit
                si sine causa? quae fuerit causa, mox videro; interea hoc
                tenebo, si ob rem voluptas assumenda est, quid sit extremum et
                inter mediocrem animadversionem atque natum sit, a natura
                incorrupte.
                <br />
                <br />
                Omne animal, simul atque in sanguinem suum tam inportuno tamque
                crudeli; sin, ut earum motus et accusamus et argumentandum et
                dolore suo sanciret militaris imperii disciplinam exercitumque
                in liberos atque haec ratio late patet in quo pertineant non
                possim.
              </p>
            </div>

          </div>
          <div
              style={{
                height: "394px",
                marginTop: "15%",
                backgroundColor: "white",
                borderRadius: "20px",
              }}
            >
              <h4 className="desCrip">Features</h4>

              <div style={{display:'flex',alignItems:'center',marginLeft:'40px'}}>
                <Col>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                </Col>
                <Col>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                </Col>
                <Col>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <CheckCircleIcon/>
                <p style={{marginLeft:'10px'}}>Air Condition</p>

                </div>
                </Col>

              </div>
              
            </div>

        </Col>

        <Col xs={4}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Col>
      </div>
    </div>
    <h2>Similar listings</h2>
    <HS3/>
    </div>
  );
}

export default H1S2;
