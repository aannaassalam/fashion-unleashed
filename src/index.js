import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import rootReducer from "./redux/reducers/rootReducer.js";
import axios from "axios";
import firebase from "./config/firebaseConfig";
window.axios = axios;

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

console.log("ENVIRONMENT IS", process.env.NODE_ENV);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
