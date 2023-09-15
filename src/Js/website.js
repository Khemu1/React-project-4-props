import React from "react";
import data from "./data";
import Nav from "./nav";
import Card from "./card";
function Website() {
	const elements = data.map((e) => {
		return <Card {...e} key={e.id} />;
		// it's recommended for each child to have a key
	});
	return (
		<div className="parent">
			<Nav />

			<div className="cards-cont">{elements}</div>
		</div>
	);
}
export default Website;
