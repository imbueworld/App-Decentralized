import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import back from "../images/back.jpeg";
export default class Dashboard extends Component {
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
        <Row class='divstyle' style={{ width: "100%" }}>
          <Col style={{ marginLeft: 200, marginTop: 60 }}></Col>
          <Col>
            <h6
              className='createWalletcentered'
              onClick={() => this.props.history.push("ConnectWallet")}
            >
              Connect Wallet
            </h6>
          </Col>
        </Row>
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
              onClick={() => this.props.history.push("ConnectWallet")}
            >
              CONNECT WALLET TO JOIN LIVESTREAM
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
