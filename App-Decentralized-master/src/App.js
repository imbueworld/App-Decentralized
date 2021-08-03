import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <div>
            {router.map((route, index) => {
             return(
              <div>
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={((props) => {
                    return (
                      <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                    );
                  })}
                />
              </div>
            )
            })}
          </div>
        </Router>
      </div>
    );
  }
}
