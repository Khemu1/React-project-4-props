import React from "react";
import Nav from "./nav";
import Pics from "./pics";
import Info from "./info";
import Cards from "./cards";
import one from "../images/image 12.png";
import two from "../images/wedding-photography 1.png";
import three from "../images/mountain-bike 1.png";

function Website() {
	return (
		<div className="parent">
			<Nav />
			<Pics />
			<Info />
			<div className="cards-cont">
				<Cards img={one} rate="5.0" raters="6" from="USA" dec="Life lessons with Katie Zaferes" avi="sold out" price="$136" type="person" />
				<Cards img={two} rate="5.0" raters="30" from="Canada" dec="Learn wedding photography" avi="online" price="$125" type="person" />
				<Cards img={three} rate="4.8" raters="2" from="Finland" dec="Group Mountain Bikinsg" avi="online" price="$50" type="group" />
			</div>
		</div>
	);
}
export default Website;
