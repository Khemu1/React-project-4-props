import React from "react";

function Cards(props) {
	// console.log(props.e);
	let status;
	if (props.slotsLeft === 0) {
		status = "sold-out";
	} else if (props.slotsLeft > 0) {
		status = "online";
	}
	return (
		<article className="Cards">
			<div className="container">
				{status && <div className="avi">{status}</div>}
				<div className="img">
					<img src={`../images/${props.img}`} alt="swimmer" />
				</div>
				<div className="pic-info">
					<div className="rating-country">
						<div className="rating">
							<div className="star">
								<i class="fa-solid fa-star"></i>
							</div>
							<div className="number">{props.rate}</div>
						</div>
						<div className="Or-R-country">
							<span className="Or-R">({props.raters}) .</span>
							<span className="country">{props.from}</span>
						</div>
					</div>
					<div className="decs-price">
						<div className="decs">
							<span>{props.dec}</span>
						</div>
						<div className="price-from">
							<span className="price">From {props.price}</span>
							<span className="from">/ {props.type}</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
export default Cards;
