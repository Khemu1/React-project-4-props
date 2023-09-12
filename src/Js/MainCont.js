import React from "react";

function MainCont() {
	return (
		<article className="main-cont">
			<div className="name-job">
				<h1>Laura Smith</h1>
				<h5>Frontend Developer</h5>
				<a>
					<p>lurasmith.website</p>
				</a>
			</div>
			<div className="buttons">
				<div className="Email">
					<span>
						<i class="fa-solid fa-envelope" id="email"></i>
					</span>
					<span>Email</span>
				</div>
				<div className="Linkedin">
					<span>
						<i class="fa-brands fa-linkedin" id="linkedin"></i>
					</span>
					<span>Linkedin</span>
				</div>
			</div>
			<div className="info">
				<div className="about-1">
					<h3>About</h3>
					<p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
				</div>
				<div className="about-2">
					<h3>Interests</h3>
					<p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
				</div>
			</div>
		</article>
	);
}
export default MainCont;
