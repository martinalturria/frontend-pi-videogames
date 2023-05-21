import React from "react";
import ReactDOM from "react-dom";
import "./Normalize.css"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.baseURL = "backend-pi-videogames-production-eee1.up.railway.app"

ReactDOM.render(
    <Provider store= {store}>
        <BrowserRouter>
            <App />,
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
