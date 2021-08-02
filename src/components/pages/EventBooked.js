import React, { Component } from "react";
import "../../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import back from "../../images/dashboard.jpg";

import ethereum from '../../images/ethereum.jpg';
import tick from '../../images/tick.svg';


export default class EventBooked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: "",
      address: '',
      walletBalance: '',
    };
  }

  componentDidMount = async () => {
    const walletAddress = await localStorage.getItem("walletaddress");
    this.setState({ walletAddress: walletAddress, walletBalance: localStorage.getItem('walletBalance') });
    var str = this.state.walletAddress;
    var res = str.substring(0, 7);
    var last2 = str.slice(-4);
    console.log("res:", res + '...' + last2);
    this.setState({ address: res + '...' + last2 })
  }
  render() {
    const address = this.state.address;
    const walletBalance = this.state.walletBalance;

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
          <div className="wallet-status">
            <div style={{ width: 15, height: 15, backgroundColor: "#9CFFA6", borderRadius: "50%", marginTop: 8 }}>
            </div>
            <div style={{ height: 31, 
                          backgroundColor: "#edeef2", 
                          fontSize: 11,
                          lineHeight: "31px",
                          paddingLeft: 10,
                          paddingRight: 10,
                          fontWeight: 500,
                          marginLeft: 10 }}>
                          { walletBalance } ETH
                          <span style={{ marginLeft: 10, padding: "5px 8px", borderRadius: 5, backgroundColor: "#f7f8fa"}}>
                            { address }
                            <img style={{ width: 12, marginLeft: 10 }} src={ethereum} />
                          </span>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: 30,
                      textAlign: "center" }}>
          <img src={back} style={{ width: 950 }}/>
          <a  className="book-button" style={{ left: 830 }}>
            You’ve<br/>successfully<br/>booked<br/>
            <img src={tick} style={{marginTop: 20}} />
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
