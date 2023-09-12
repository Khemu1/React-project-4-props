import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./App";

// import App2 from "./App2";

function MainCont() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ol>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ol>
		</div>
	);
}

function Cont() {
	return (
		<div className="parent">
			<Header />
			<div className="cont">
				<MainCont />
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cont />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
