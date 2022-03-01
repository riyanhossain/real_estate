import React from 'react'
import { Col } from 'react-bootstrap'

function H1S2(props) {
    const h1=props.h1
  return (
    <div style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'75%'}}>
            <Col xs={8}>
                <img src={props.h1.image} alt="" style={{width:'704px',height:'520px'}} />
            </Col>
            <Col xs={4}>
            </Col>

        </div>
        
    </div>
  )
}

export default H1S2