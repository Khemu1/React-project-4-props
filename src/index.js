import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Website from "./Js/website";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Website />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const nums = [1, 2, 3, 4];
nums.forEach((e) => {
	console.log(`<p>${e}</p>`);
});
