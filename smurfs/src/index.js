import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//import reducer and create store
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {reducer} from "./reducers/reducers"
//import thunk
import thunk from "redux-thunk"
//middleware application through thunk
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
