import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import back from "../images/back.jpeg";
export default class EventBooked extends Component {
  render() {
    var background = {
      backgroundSize: "cover",
      width: "50vw",
      height: "20%",
      marginLeft: "25%",
      marginRight: 20,
      marginTop: 20,
    };
    var textStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
    };
    return (
      <div
        style={{ backgroundColor: "#EEEEEE", width: "100vw", height: "100vh" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 60,
            marginTop: 20,
            // width: 100
          }}
        >
          <div style={{ marginTop: 12, marginRight: 20, }}>
            <span className="dot" style={{ backgroundColor: '#3AF048' }} />

          </div>
          <div
            style={{
              backgroundColor: "#C8C8C8",
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 5,
              marginBottom: 5,
              fontSize: 16,
              width: 300,

            }}
          >
            <Row>
              <Col style={{ width: 80, marginTop: 5 }}>0.029836 ETH</Col>
              <Col style={{ backgroundColor: '#FFFFFF', marginTop: 5, marginBottom: 5, borderRadius: 5 }}>0x8171...192</Col>
            </Row>
          </div>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "#495049",
              fontFamily: "Sans-serif",
              fontSize: 50,
            }}
          >
            I M B U E
          </h1>
        </div>
        <div style={{ width: "auto", justifyContent: "center" }}>
          <Image style={background} responsive src={back}></Image>
          <div style={textStyle}>
            <h6
              className='createcentered'
              onClick={() => this.props.history.push("PurchaseEvent")}
            >
              YOU'VE <br />SUCCESSFULLY<br />BOOKED
            </h6>
          </div>
        </div>
        {/* <Row style={{marginLeft: 350, width: 900}}>
              
                    <Col style={{width: 100}}>WORKOUT LIVE</Col>
                    <Col style={{width: 200}}><h3 style={{textAlign: 'center', width: 200}}>WORKOUT WITH ME AND GET ALL THE TIPS <br/> OF THE TIPS OF THE TRADE</h3></Col>
                    <Col style={{width: 200}}>8 AM - 9 AM<br/> JULY 21 2021</Col>
                

            </Row> */}
        <div class='Row' style={{ marginLeft: 380, width: 800, marginTop: 20 }}>
          <div class='Column' style={{ width: 150, fontSize: 13 }}>
            WORKOUT LIVE
          </div>
          <div class='Column' style={{ textAlign: "center", marginLeft: 10, width: 400, fontSize: 13 }}>
            WORKOUT WITH ME AND GET ALL THE TIPS <br /> OF THE TIPS OF THE TRADE
          </div>
          <div class='Column' style={{ width: 200, fontSize: 13 }}>
            8 AM - 9 AM
            <br /> JULY 21 2021
          </div>
        </div>
      </div>
    );
  }
}
