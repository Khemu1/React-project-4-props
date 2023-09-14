import React from "react";
import air from "../images/airbnb 1.png";
function Nav() {
	return (
		<nav>
			<div className="containter">
				<div className="pic-cont">
					<img className="pic" src={air} alt="pic" />
				</div>
				<div className="shadow"></div>
			</div>
		</nav>
	);
}
export default Nav;
