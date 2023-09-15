import React from "react";
import Nav from "./nav";
import Pics from "./pics";
import Info from "./info";
import Cards from "./cards";
import data from "./data";

function Website() {
	const elements = data.map((e) => {
		return <Cards {...e} key={e.id} />;
		// it's recommended for each child to have a key
	});
	return (
		<div className="parent">
			<Nav />
			<Pics />
			<Info />
			<div className="cards-cont">{elements}</div>
		</div>
	);
}
export default Website;
