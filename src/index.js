import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap-css-only/css/bootstrap.min.css'; 
 import 'mdbreact/dist/css/mdb.css';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="mohiesen.eu.auth0.com"
    clientId="7bpsEy4NRR6EBUaedYutmjcOj6JsY4h8"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);