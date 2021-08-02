import React from "react";
import "./App.css";
import Dashboard from './components/pages/Dashboard'
import ConnectWallet from './components/pages/ConnectWallet'
import PurchaseEvent from './components/pages/PurchaseEvent'
import EventBooked from './components/pages/EventBooked'
export default [
    {
        path: "/",
        exact: true,
        layout: Dashboard,
      },
      {
        path: "/ConnectWallet",
        exact: true,
        layout: ConnectWallet,
      },
      {
        path: "/PurchaseEvent",
        exact: true,
        layout: PurchaseEvent,
      },
      {
        path: "/EventBooked",
        exact: true,
        layout: EventBooked,
      },

]