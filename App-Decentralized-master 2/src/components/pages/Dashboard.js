import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import back from "../../images/dashboard.jpg";
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
      <div className="container"
        style={{ backgroundColor: "#FFFFFF", width: "100vw", height: "100vh" }}
      >
        <div style={{ width: "100%" }}>
          <div>
            <div
              style={{
                textAlign: "center",
                marginTop: 36,
                fontSize:40,
                fontFamily: "MyWebFont",
              }}
            >
              I M B U E
            </div>
          </div>
          <div style={{
                position: "absolute",
                top: 40,
                right: 300,
          }}>
            <a className="wallet-button" onClick={() => this.props.history.push("ConnectWallet")}>Connect Wallet</a>
          </div>
        </div>
        
        <div style={{ marginTop: 30,
                      textAlign: "center" }}>
          <img src={back} style={{ width: 950 }}/>
          <a onClick={() => this.props.history.push("ConnectWallet")} className="join-button" style={{ left: 600 }}>
            Connect Wallet to Join Livestream
          </a>
        </div>
        <div style={{
          display: "inline-flex",
          textAlign: "center",
          fontFamily: 'MyWebFont',
          fontSize: 15
        }}>
          <div style={{
            paddingLeft: 180,
            paddingTop: 15
          }}>
            workout live
          </div>
          <div style={{
            paddingLeft: 80,
            paddingTop: 5
          }}>
            workout with me and get all the tips<br/>of the tips of the trade.
          </div>
          <div style={{
            paddingLeft: 90,
            paddingTop: 10
          }}>
            8 am - 9 am <br/>July 21 2021
          </div>
        </div>
      </div>
    );
  }
}
