import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import { ShopContextProvider } from "./Context/UseContext";

ReactDOM.render(
  <>
    <ShopContextProvider>
      <BrowserRouter>
        <Nav />
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </>,
  document.getElementById("root")
);
